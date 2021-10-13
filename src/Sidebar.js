import { Component } from "react";

export default class Sidebar extends Component {

    handleAsideRef = (node) => {
        if (this.props.onRef) {
            this.props.onRef(node);
        }
    }
    
    render() {
        return <aside ref={this.handleAsideRef} className={this.props.isOpen ? 'isOpen' : ''}>
            {this.props.children}
        </aside>;
    }
}