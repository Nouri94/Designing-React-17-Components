import Speaker from './Speaker'
import { data } from '../../SpeakerData'
import useRequestDelay, { REQUEST_STATUS } from '../hooks/useRequestDelay'
import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext';
import { useContext } from 'react';

function SpeakersList() {
    const { eventYear, searchQuery } = useContext(SpeakerFilterContext);
    const { data: speakersData, requestStatus, error, updateRecord }
        = useRequestDelay(2000, data)

    if (requestStatus === REQUEST_STATUS.FAILURE) return (
        <div className='text-danger'>
            ERROR: <b>Loading Speaker Data failed {error}</b>
        </div>
    )

    //if (requestStatus === REQUEST_STATUS.SUCCESS)   return <div>Loading...</div>

    return (<div className="container speakers-list">
        <div className="row">
            {speakersData.filter(function (speaker) {
                return (
                    speaker.first.toLowerCase().includes(searchQuery) ||
                    speaker.last.toLowerCase().includes(searchQuery)
                );
            })
                .filter(function (speaker) {
                    return speaker.sessions.find((session) => {
                        return session.eventYear === eventYear;
                    });
                })
                .map(function (speaker) {
                    return (
                        <Speaker key={speaker.id}
                            speaker={speaker}
                            onFavoriteToggle={(doneCallback) => {
                                updateRecord({ ...speaker, favorite: !speaker.favorite, }, doneCallback);
                            }} />
                    );
                })}
        </div>
    </div>);
}

export default SpeakersList;