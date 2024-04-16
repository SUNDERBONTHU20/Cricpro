import React, { useState, useEffect } from 'react';
import { CircularProgress, Typography, Card, CardContent } from '@mui/material';

const LiveScore = () => {
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '624dcf2985mshc66db7d1278d664p1bf3c3jsn652c93368f55',
          'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMatchData(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Live Match Scores
      </Typography>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          {matchData && matchData.matches && matchData.matches.map((match, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <Card style={{ width: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {match.teams[0].name} vs {match.teams[1].name}
                  </Typography>
                  <Typography variant="body1">
                    {match.status}
                  </Typography>
                  {/* Add more details you want to display */}
                </CardContent>
              </Card>
            </div>
          ))}
          {(!matchData || !matchData.matches || matchData.matches.length === 0) && (
            <Typography variant="body1" align="center">
              No live matches available
            </Typography>
          )}
        </div>
      )}
    </div>
  );
};

export default LiveScore;
