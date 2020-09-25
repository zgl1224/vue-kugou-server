// 用mockjs模拟生成数据
var Mock = require('mockjs');

// node app.js 要求db.js 暴露一个object
let mapData = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
      id: i+'',
      title:'@ctitle(8,12)',
      des:'@ctitle(10,20)',
      time:'@integer(1594004307038,1598004307038)',
      detail:{
        auth_icon:Mock.Random.image('50x50',Mock.Random.color(),Mock.Random.cword(1)),
        auth:'@cname()',
        content: [1,2,3].map(()=>(
          "<p style='margin-top: 20px;text-indent: 2em'>"+"@cparagraph(10,15)"+"</p>"
        )).join('')
      }
    })
  }

  return data;
};

let mapData2 = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
      id: i+'',
      title:'@title(1,2)',
			// first:'@first',
      banner: Mock.Random.image('1680x745',Mock.Random.color(),Mock.Random.cword(4,8)),
      time:'@integer(1594004307038,1598004307038)',
      detail:{
        auth_icon:Mock.Random.image('50x50',Mock.Random.color(),Mock.Random.cword(1)),
        auth:'@name()',
        content: [1,2,3].map(()=>(
          "<p style='margin-top: 20px;text-indent: 2em'>"+"@cparagraph(10,15)"+"</p>"
        )).join('')
      }
    })
  }

  return data;
};

// 首页列表
let mapData3 = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
      id: i+'',
      title:'@title(1,2)',
			first:'@first',
			// img: Mock.Random.image('1680x745',Mock.Random.color(),Mock.Random.word(1)),
			// content: [1].map(()=>(
			//   "<p style='margin-top: 20px;text-indent: 2em'>"+"@cparagraph(5,10)"+"</p>"
			// )).join('')
    })
  }
  return data;
};

// 轮播图数据
let mapData4 = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
      id: i+'',
			// title:'@title(1,2)',
			// first:'@first',
      // banner: Mock.Random.image('1680x745',Mock.Random.color(),Mock.Random.word(1)),
			img: Mock.Random.image('1680x745',Mock.Random.color(),Mock.Random.word(1)),
			// content: [1].map(()=>(
			//   "<p style='margin-top: 20px;text-indent: 2em'>"+"@cparagraph(5,10)"+"</p>"
			// )).join('')
    })
  }
  return data;
};
// 歌曲排行
  let data=[];
let mapData6 = (n) => {

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
      id: i+'',
			num:Mock.mock('@natural(10000, 20000)'),
			title:'@title(3)',
      img: Mock.Random.image('50x50',Mock.Random.color(),Mock.Random.word(1)),
			// content: [1].map(()=>(
			//   "<p style='margin-top: 20px;text-indent: 2em'>"+"@cparagraph(5,10)"+"</p>"
			// )).join('')
    })
  }
  return data;
};
// 歌单
let mapData5 = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
      id: i+'',
			title:'@title(3)',
      img: Mock.Random.image('50x50',Mock.Random.color(),Mock.Random.word(1)),
			content: [1].map(()=>(
			  "<p style='margin-top: 20px;text-indent: 2em'>"+"@cparagraph(5,10)"+"</p>"
			)).join('')
    })
  }
  return data;
};
module.exports = Mock.mock({
  'user': {
    "songs":Mock.Random.integer(0,100),
    "songlist":Mock.Random.integer(0,100),
		"follow":Mock.Random.integer(10,50),
    "nikename":Mock.Random.cname(),
    // "icon":Mock.Random.image('20x20',Mock.Random.color(),Mock.Random.cword(1)),
  },
  'banner':mapData4(10),
	'cell':mapData3(30),
	'songlist':mapData6(20),
	'ranklist':mapData5(20),
});