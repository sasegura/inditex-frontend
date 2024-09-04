import { Route, Routes } from 'react-router-dom';

import EpisodeList from './containers/episodeList/episodeList';
import EpisodeDetail from './containers/episodeDetail/episodeDetail';
import PodcastPage from './pages/podcastPage/podcastPage';
import EpisodePage from './pages/episodePage/episodePage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PodcastPage />} />
      <Route path="/podcast/:podcastId/" element={<EpisodePage />}>
        <Route path="" element={<EpisodeList />} />
        <Route path="episode/:episodeId" element={<EpisodeDetail />} />
      </Route>
    </Routes>
  );
};
export default Router;
