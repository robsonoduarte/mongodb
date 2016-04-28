config = {

	_id: 'm101',
	members:[
		{
		  _id:0,
		  host:'192.168.99.100:27017',
		  priority:0,
		  slaveDelay:5
		},
		{
		  _id:1,
		  host:'192.168.99.100:27018'
		},
		{
		  _id:2,
		  host:'192.168.99.100:27019'
		}
	]
}


rs.initiate(config)
rs.status()

