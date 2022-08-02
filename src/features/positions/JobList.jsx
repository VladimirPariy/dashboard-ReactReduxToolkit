import {useDispatch} from "react-redux";
import {JobPosition} from './JobPosition';
import {addFilter} from "../filter/filter-slice";
import {usePositions} from "./usePositions";
import {useFetchPositions} from "./useFetchPostitions";

const JobList = () => {
    usePositions()
    const dispatch = useDispatch()
    const positions = usePositions()
    useFetchPositions()
    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter))
    }

    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition key={item.id}
                             handleAddFilter={handleAddFilter}
                             {...item} />
            ))}
        </div>
    )
}

export {JobList};