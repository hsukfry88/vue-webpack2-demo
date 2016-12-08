/**
 * @Describes 全部基础配置文件
 * @Author yuanzhijia@yidengxuetang.com
 * @Date 2016-11-30
 */
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