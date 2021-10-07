import React from 'react'
import './FilterBar.css';

export default function FilterBar(props) {
    return (
        <div className="FilterBar">
            <h2 className="filter-title">
                {props.filtersTitle}
            </h2>
                {props.filterAmount === "2" ? (
                    <div className="bar">
                    <div className="filter selected">
                    <h3 className="filter-text">
                        {props.filterOne}
                    </h3>
                        
                    </div>
                    <div className="filter">
                        <h3 className="filter-text">
                            {props.filterTwo}
                        </h3>
                    </div>
                    </div>
                ):(
                    <div className="bar">
                    <div className="filter selected">
                    <h3 className="filter-text">
                        {props.filterOne}
                    </h3>
                    
                </div>
                <div className="filter">
                    <h3 className="filter-text">
                        {props.filterTwo}
                    </h3>
                </div>
                <div className="filter">
                <h3 className="filter-text">
                    {props.filterThree}
                </h3>
                    
                </div>
                <div className="filter">
                    <h3 className="filter-text">
                        {props.filterFour}
                    </h3>
                </div>
                </div>
                )}
                
                
        </div>
    )
}
