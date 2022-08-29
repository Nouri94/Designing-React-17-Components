import { data } from '../../SpeakerData'
import { useState, useEffect } from 'react';

function useRequestSpeakers(delatTime = 1000) {
    const [speakersData, setSpeakersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false); // There is no error to begin with
    const [error, setError] = useState("");
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delatTime);
                setIsLoading(false);
                setSpeakersData(data);
            }
            catch (e) {
                setIsLoading(false);
                setHasErrored(true);
                setError(e);
            }
        }
        delayFunc();
    }, []);// Empty array means that useEffect only run once when the component renders for the first time
    //if left empty then on every click or other event it will be called
    function onFavoriteToggle(id) {
        const speakersRecPrevious = speakersData.find(function (rec) {
            return rec.id === id;
        });
        const speakerRecUpdated = {
            ...speakersRecPrevious,
            favorite: !speakersRecPrevious.favorite,
        };
        const speakersDataNew = speakersData.map(function (rec) {
            return rec.id === id ? speakerRecUpdated : rec;
        });

        setSpeakersData(speakersDataNew);
    }
    return {speakersData, isLoading, hasErrored, error, onFavoriteToggle };
}

export default useRequestSpeakers;