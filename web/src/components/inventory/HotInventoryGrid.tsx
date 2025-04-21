import React from 'react';
import { Inventory } from '../../typings';
import InventorySlot from './InventorySlot';
import bag from '../../assets/ux-icons/wallet.png';
import InventoryControl from './InventoryControl';

const HotInventoryGrid: React.FC<{ inventory: Inventory }> = ({ inventory }) => {
  return (
    <>
      <div className="hotinventory-grid-wrapper">
        <div className='div-container'>
            <div className="label-container">
          <img src={bag} alt="" className="icon-wallet" />
          <p className='label-pocket'>Pocket</p>
        </div>
        <div>
          <InventoryControl />
        </div>
        </div>
      
        <div className="line"></div>

        <div className="hotinventory-grid-container">
          <>
            {inventory.items.slice(0, 5).map((item, index) => (
              <InventorySlot
                key={`${inventory.type}-${inventory.id}-${item.slot}`}
                item={item}
                inventoryType={inventory.type}
                inventoryGroups={inventory.groups}
                inventoryId={inventory.id}
              />
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default HotInventoryGrid;
