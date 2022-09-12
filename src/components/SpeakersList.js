import Speaker from './Speaker'
import { data } from '../../SpeakerData'
import useRequestRest, { REQUEST_STATUS } from '../hooks/useRequestRest'
import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext';
import { useContext } from 'react';
import SpeakerAdd from './SpeakerAdd';

function SpeakersList() {
    const { eventYear, searchQuery } = useContext(SpeakerFilterContext);
    const { data: speakersData, requestStatus, error, updateRecord, insertRecord, deleteRecord, }
        = useRequestRest()

    if (requestStatus === REQUEST_STATUS.FAILURE) return (
        <div className='text-danger'>
            ERROR: <b>Loading Speaker Data failed {error}</b>
        </div>
    )

    //if (requestStatus === REQUEST_STATUS.SUCCESS)   return <div>Loading...</div>

    return (<div className="container speakers-list">
        <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord}></SpeakerAdd>
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
                            updateRecord={updateRecord}
                            insertRecord={insertRecord}
                            deleteRecord={deleteRecord} />
                    );
                })}
        </div>
    </div>);
}

export default SpeakersList;