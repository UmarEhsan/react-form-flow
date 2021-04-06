import React from 'react';

const Sidebar=  () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode form" onDragStart={(event) => onDragStart(event, 'form')} draggable>
        Form Widget
      </div>
      <div className="dndnode dataSource" onDragStart={(event) => onDragStart(event, 'dataSource')} draggable>
        DataSource
      </div>
       {/* <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div> */}
    </aside>
  );
};

export default Sidebar;