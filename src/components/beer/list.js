import React from 'react';
import { List ,message} from 'antd';
import BeerItem from './item';

function ListBeer(props) {
  
  
  return (
    <div style={{ minHeight: '300px' }}>
      <List
        pagination={{
          onChange: (page) => {
            message.success('Page'+ page)
            //TODO scroll prosition to top
           
           
          },
          pageSize: 10,
          
        }}


        grid={{ gutter: 16, column: 4 }}
        dataSource={props.items}
        renderItem={item => (
          <List.Item>
            <BeerItem item={item} />
          </List.Item>
        )}
      />
    </div>
  );
}

export default ListBeer;
