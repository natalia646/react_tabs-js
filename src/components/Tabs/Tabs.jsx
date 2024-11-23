import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeId = activeTabId;

  if (!tabs.some(item => item.id === activeId)) {
    activeId = tabs[0].id;
  }

  const activeTab = tabs.find(item => item.id === activeId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={item.id}
              data-cy="Tab"
              className={cn({ 'is-active': item.id === activeId })}
              onClick={
                item.id !== activeId ? () => onTabSelected(item.id) : null
              }
            >
              <a href={`#${item.id}`} data-cy="TabLink">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
