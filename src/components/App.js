import { useState } from 'react';
import Dropdown from './Dropdown';
import '../styles/App.css';

function App() {
  const [visible, setvisible] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const itemList = [
    {
      name: 'Yes',
      Value: 'Yes',
    },
    {
      name: 'Probably not',
      Value: 'Probably not',
    },
  ];

  const handleClick = (index) => {
    setSelectedItemIndex(index);
    setvisible(false);
  };

  const showOption = () => {
    setvisible(true);
  };

  return (
    <div className="App">
      <div className="container">
        <h3>Should you use a dropdown?</h3>

        {visible ? (
          <div>
            <div className="defaultState" onMouseEnter={showOption}>
              {selectedItemIndex != null
                ? itemList[selectedItemIndex].name
                : 'Select'}{' '}
              <i class="fa-solid fa-angle-down"></i>{' '}
            </div>
            {itemList.map((item, index) => (
              <Dropdown
                item={item}
                key={index}
                handleClick={() => handleClick(index)}
              />
            ))}
          </div>
        ) : (
          <div className="defaultState" onMouseEnter={showOption}>
            {selectedItemIndex != null
              ? itemList[selectedItemIndex].name
              : 'Select'}{' '}
            <i class="fa-solid fa-angle-right"></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
