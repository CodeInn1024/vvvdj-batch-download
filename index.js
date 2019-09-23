const puppeteer = require('puppeteer');
var http = require('http');
const fs = require("fs");
const path = require('path');
const readline = require('readline');
const ProgressBar = require('./progressbar');
const ids = 4746757;
const boxid = 2690022;

(async () => {
	const brower = await puppeteer.launch({
		headless: true,
		// executablePath: path.join(process.cwd(), './chrome-win/chrome.exe'), //加载手动下载包
		ignoreDefaultArgs: ['--enable-automation'],
		defaultViewport: {
			width: 320,
			height: 568
		},
	});
	const page = await brower.newPage();
	const lists = await getLists();

	console.log('...开始获取歌曲链接')
	for (let i = 0; i < lists.length; i++) {
		await page.goto(`http://www.vvvdj.com/play/${lists[i].id}.html`, {
			waitUntil: 'networkidle2'
		});
		const url = await page.evaluate(() => {
			return `/face/${playurl}.mp4`;
		});
		await download(url, lists[i].musicname)
	}
	console.log('处理完毕，感谢使用！！！')
})().catch(error => {
	console.log(error);
});


// 收藏数据
const getLists = function() {
	return new Promise(function(resolve, reject) {
		var options = {
			host: "www.vvvdj.com",
			path: `/play/ajax/fav?ids=${ids}&boxid=${boxid}`,
			method: 'get'
		}
		var sendmsg = '';
		req = http.request(options, function(req) {
			console.log('...开始获取收藏数据')
			req.on("data", function(chunk) {
				sendmsg += chunk;
			});
			req.on("end", function(d) {
				resolve(JSON.parse(sendmsg).Data)
			});
		});
		req.end();
	});
};

// 下载
const download = function(url, name) {
	const pb = new ProgressBar(`${name}准备下载`, 0);
	return new Promise(function(resolve, reject) {
		const options = {
			host: "t.h.vvvdj.com",
			path: url,
			method: 'get'
		}
		const out = fs.createWriteStream(`./download/${name}.mp3`);
		let downLength = 0;
		req = http.request(options, function(req) {
			const contentLength = parseInt(req.headers['content-length']);
			req.on("data", function(chunk) {
				downLength += chunk.length;
				pb.render({
					completed: Math.floor(downLength * 100 / contentLength),
					total: 100,
					loadingText: '下载中...',
					successText: '下载完成！'
				});
				out.write(chunk, function(err) {
					//console.log(chunk.length);
				});
			});
			req.on("end", function(d) {
				console.log('下载完成')
				resolve('下载成功')
			});
		});
		req.end();
	});
};
