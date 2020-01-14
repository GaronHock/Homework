import React from 'react';

class Tabs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {selectedTab : 0};
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tabNum) {
      this.setState({selectedTab: tabNum});
  }

  render(){
    const { tabsArr } = this.props;

    const renderTabs = tabsArr.map( (tab, i) => {
        return (
            <li key={ i } onClick={ () => { this.changeTab(i) } }><h1>{tab.title}</h1></li>
        );
    })

    const contentForTab = (tabNum) => {
        return tabsArr[tabNum].content;
    }

    return (
        <div className = 'tabs'>
        <ul>
            { renderTabs }
        </ul>
        <p>{ contentForTab(this.state.selectedTab) }</p>
        </div>
    );
  }
}



export default Tabs;