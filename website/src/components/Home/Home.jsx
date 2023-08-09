import { useSelector } from 'react-redux';

import Page from '../Page/Page';
import AppHeader from '../AppHeader/AppHeader';
import Content from '../Content/Content';

import { getSubtitle } from '../../utils';

const Home = () => {
  const recipes = useSelector((state) => state.recipes.list);
  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text={getSubtitle(recipes.length)}
        recipes={recipes}
      />
    </Page>
  );
};

export default Home;
