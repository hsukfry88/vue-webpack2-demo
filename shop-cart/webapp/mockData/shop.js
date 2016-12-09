const _products = [{
	"id": 1,
	"title": "iPad 4 Mini",
	"intro": "一身轻，更举重若轻。现RMB 2，888起售。立刻购买可享12期免息分期，每期 RMB 241 起。免费送货与退货",
	"price": 500.01,
	"inventory": 2
}, {
	"id": 2,
	"title": "H&M T-Shirt White",
	"intro": "T-shirt又名T恤，起源于美国；因为款式百变又适用于男女老少，很快的在全球都流行起来。也称文化衫、汗衫。饰有特定图案或文字，圆领、短袖，多为针织棉质",
	"price": 10.99,
	"inventory": 10
}, {
	"id": 3,
	"title": "Charli XCX - Sucker CD",
	"intro": "CD包音乐网-专业的无损音乐分享论坛,分享高音质无损音乐免费下载",
	"price": 19.99,
	"inventory": 5
}]

export default {
	getProducts(cb) {
		setTimeout(() => cb(_products), 100);
	}
}