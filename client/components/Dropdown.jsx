import React from 'react';

//import css
import './../styling/Search.css';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  handleClickOutside(e) {
    e.preventDefault();

    this.setState({listOpen: true}, () => {
      document.addEventListener('click', this.closeDropdown);
    })
    // this.setState({
    //   listOpen: false
    // })
  }

  closeDropdown(e) {
    if (!this.dropdownMenu.contains(e.target)) {
      this.setState({listOpen: false}, () => {
        document.removeEventListener('click', this.closeDropdown);
      })
    }
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render() {
    const {dropDown} = this.props;
    const {listOpen, headerTitle} = this.state;
    console.log('this.props in DROPDOWN IS:', this.props);
    return (
      <div className="dd-wrapper" ref={(element) => {
        this.dropdownMenu = element;
      }}>
        {/* <div className="dd-header" onClick={() => this.toggleList()} > */}
        <div className="dd-header" onClick={this.handleClickOutside} >
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen
            ? <FontAwesomeIcon icon={faAngleUp} />
            : <FontAwesomeIcon icon={faAngleDown} />
            }
        </div>
        {/* <ReactCSSTransitionGroup transitionName = "menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>  */}
        {listOpen && <ul className="dd-list" >
            {dropDown.map ((item) => (
              <li className="dd-list-item" onClick={() => this.props.toggleSelected(item.id, item.key)} key={item.id} >{item.title} {item.selected && <FontAwesomeIcon icon={faCheck}/>}</li>
            ))}
        </ul>}
        {/* </ReactCSSTransitionGroup> */}
      </div>
    )
  }
}

export default Dropdown;