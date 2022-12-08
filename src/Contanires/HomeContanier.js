import {connect} from 'react-redux'
import Home from '../Components/Home'
import {addToCart} from '../Service/Action/Action'

const mapStateToprops=state=>({
    data:state.cartItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandeler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToprops,mapDispatchToProps)(Home)