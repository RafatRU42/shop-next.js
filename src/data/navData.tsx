const commonNavData = [
	{
		path:'/',
		title:'Home'
	},
	{
		path:'/about',
		title:'About'
	},
	{
		path:'/blogs',
		title:'Blogs'
	},
	{
		path:'/products',
		title:'Products'
	},
	
];

export const afterNavData = [
	...commonNavData,
	{
		path:'/dashboard',
		title:'Dashboard'
	},

];

export const beforeNavData = [
	...commonNavData  ,
	{
		path:'/login',
		title:'Login'
	},

	{
		path:'/signUp',
		title:'Signup'
	}
]