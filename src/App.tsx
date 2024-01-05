import React, { useState } from 'react';
import { Button } from '@mui/material';
import GeneralsMenu from './components/GeneralsMenu';
import ComparisonPage from './pages/Compare';
import GeneralDetails from './components/GeneralDetails';
import generalsData from './data/generalsData';
import {General} from './types';

const App: React.FC = () => {
  const [selectedGeneral, setSelectedGeneral] = useState<General | null>(null);
  const [showComparisonPage, setShowComparisonPage] = useState(false);

  const handleSelectGeneral = (id: number) => {
    const general = generalsData.generals.find((g) => g.id === id);
    setSelectedGeneral(general || null);
  };

  const handleToggleComparisonPage = () => {
    setShowComparisonPage(!showComparisonPage);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: showComparisonPage ? 'column' : 'row',
        margin: 20,
      }}
    >
      {!showComparisonPage && (
        <div style={{ flex: 1 }}>
          <GeneralsMenu generals={generalsData.generals} onSelect={handleSelectGeneral} />
        </div>
      )}
      <div style={{ flex: 2 }}>
        {showComparisonPage ? (
          <ComparisonPage generals={generalsData.generals} />
        ) : selectedGeneral ? (
          <GeneralDetails general={selectedGeneral} />
        ) : (
          <p>Select a general from the menu.</p>
        )}
      </div>
      <div style={{ margin: 20 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleToggleComparisonPage}
        >
          {showComparisonPage ? 'Back to Details' : 'Go to Comparison'}
        </Button>
      </div>
    </div>
  );
};

export default App;
