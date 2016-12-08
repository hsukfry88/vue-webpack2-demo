'use strict'
const path = require('path');
const config = {
	"srcDir": path.join(__dirname, '..', 'webapp'),
	"buildDir": path.join(__dirname, '..', 'build'),
	//log所在的目录
	"logDir": path.join(__dirname, '..', 'logs'),
};
//本地配置环境
const local = {

};
//本地调试环境
if (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'development') {
	config = _.extend(config, local);
}
module.exports = config;