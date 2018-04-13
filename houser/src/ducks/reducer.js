let initialState = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
    
}

  name(e) {
    this.setState({
      name: e.target.value
    })
  }

  address(e) {
    this.setState({
      address: e.target.value
    })
  }

  city(e) {
    this.setState({
      city: e.target.value
    })
  }

  state(e) {
    this.setState({
      state: e.target.value
    })
  }

  zipcode(e) {
    this.setState({ 
      zipcode: e.target.value
    })
  }
  houseList() {
    axios.post('/api/houseinfo').then(res => {
      this.setState({
        name: res.data,
        address: res.data,
        city: res.data,
        state: res.data,
        zipcode: res.data
      })
    })
  }

   <input type="text" placeholder="name" onChange={e => this.name(e)}/>
        <input type="text" placeholder="address" onChange={e => this.address(e)}/>
        <input type="text" placeholder="city" onChange={e => this.city(e)}/>
        <input type="text" placeholder="state" onChange={e => this.state(e)}/>
        <input type="text" placeholder="zipcode" onChange={e => this.zipcode(e)}/>
        <button onClick={e => this.houseList()}>COMPLETE</button>