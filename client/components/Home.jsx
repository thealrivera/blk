Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    	users: MyData.find().fetch()
    }
  },
  render() {
  let list = this.data.users.map(function(user) {
    return (
		   		<div className="card">
					<div className="item item-image" key={user._id}>
						<img src={user.avatar}></img>
						<h2>{user.name}</h2>
						<p>{user.email}</p>
					</div>
					<div className="item item-toggle">
						Am I Cool?
						<label className="toggle toggle-assertive">
							<input type="checkbox" />
							<div className="track">
						 		<div className="handle"></div>
							</div>
						</label>
					</div>

				</div>
			)
  })
  return (
    <div className="list">
      {list}
    </div>
  )
}
});