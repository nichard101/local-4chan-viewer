const Thread = require('./Thread.js');
const Post = require('./Post.js');

const op = new Post("1", null, "Hello there");
const reply = new Post("2", null, ">>1 fag");
const reply2 = new Post("3", null, ">>2 what are you talking about");
const reply3 = new Post("4", null, ">>1 shut up retard >>2 yeah get him");


const post_list = [];
//post_list.push(op);
post_list.push(reply);
post_list.push(reply2);
post_list.push(reply3);
const th = new Thread("Thread Title",op, post_list);

console.log(th.toString());