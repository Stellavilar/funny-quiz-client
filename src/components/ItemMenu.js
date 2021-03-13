import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';



const  ItemMenu = ({tag, level}) => {

    const tags = tag.map((getTag, index) => 
        <Dropdown key={getTag.id} text={getTag.title} pointing className='link item' style={{color: getTag.color, backgroundColor: "#edeaea"}}>
            <Dropdown.Menu>
                {level.map((getLevel, index) => 
                    {return <Link to={`/specificQuiz/${getTag.id}/level/${getLevel.id}`} key={getLevel.id}> <Dropdown.Item key={getLevel.id} >{getLevel.title}</Dropdown.Item></Link>})}
            </Dropdown.Menu>
        </Dropdown>);
    
    const mobileTags = tag.map((getMobileTag, index) => 
          <Dropdown key={getMobileTag.id} text={getMobileTag.title} pointing className='link item' style={{color: getMobileTag.color, backgroundColor: "#edeaea"}}>
              <Dropdown.Menu>
                {level.map((getLevel, index) => 
                    {return <Link to={`/specificQuiz/${getMobileTag.id}/level/${getLevel.id}`} key={getLevel.id}> <Dropdown.Item key={getLevel.id} >{getLevel.title}</Dropdown.Item></Link>})}
            </Dropdown.Menu>
          </Dropdown>          
    )
  
   return (
       <>
            <div className="head">
                <Menu>
                    {tags}
                </Menu>
            </div>
            <div className="mobile-menu">
                {mobileTags}
            </div>
        </>
)
         
    
};

export default ItemMenu;