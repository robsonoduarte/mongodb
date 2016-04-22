config = {

	_id: 'm101',
	members:[
		{
		  _id:0,
		  host:'e6a62d53ec40:27017',
		  priority:0,
		  slaveDelay:5
		},
		{
		  _id:1,
		  host:'e6a62d53ec40:27018'
		},
		{
		  _id:2,
		  host:'e6a62d53ec40:27019'
		}
	]
}


rs.initiate(config)
rs.status()

