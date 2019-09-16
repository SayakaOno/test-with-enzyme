# [React Redux Unit & Integration Testing with Jest and Enzyme](https://www.youtube.com/watch?v=EgJZv9Iyj-E&list=PL-Db3tEF6pB8Am-IhCRgyGSxTalkDpUV_)

### refactor

```
// 1.
describe('Header Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<Header />);
    const wrapper = component.find('.headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const component = shallow(<Header />);
    const logo = component.find('.logo');
    expect(logo.length).toBe(1);
  });
});

```

```
// 2.
const setUp = (props={}) => {
  const component = shallow(<Header />);
  return component;
}

describe('Header Component', () => {
  it('Should render without errors', () => {
    const component = setUp();
    const wrapper = component.find('.headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const component = setUp();
    const logo = component.find('.logo');
    expect(logo.length).toBe(1);
  });
});
```

```
// 3. use beforeEach()
const setUp = (props={}) => {
  const component = shallow(<Header />);
  return component;
}

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = component.find('.headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = component.find('.logo');
    expect(logo.length).toBe(1);
  });
});
```

```
// 4. use "data-test"
const setUp = (props={}) => {
  const component = shallow(<Header />);
  return component;
}

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = component.find(`[data-test='headerComponent']`);
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = component.find(`[data-test='logo']`);
    expect(logo.length).toBe(1);
  });
});
```

```
// 5.
const setUp = (props = {}) => {
  const component = shallow(<Header />);
  return component;
};

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = findByTestAttr(component, 'logo');
    expect(logo.length).toBe(1);
  });
});

```
