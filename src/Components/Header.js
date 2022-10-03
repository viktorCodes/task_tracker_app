import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

    const onClick = () => {
        console.log('Click')
    }
    
  return (
    <header className='header'>
        <h1> {title}</h1>
        <Button color='green' text='Add' onClick={onClick} />
        
        </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
}
//You can add style stuff inline  with variables if u want to
//const headingStyle = {
 //   color: 'red', 
 //   backgroundColor: 'black'
//}

export default Header