import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'
import { selectFilters } from '../../redux/selectors';
import { searchContact } from '../../redux/filtersSlice';

function SearchBox() {
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();
  const onFilter=(filter) => dispatch(searchContact(filter))
  return (
    <div className={css.container}>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" value={filter} id='filter' onChange={(e)=>onFilter(e.target.value)}/>
    </div>
  )
}

export default SearchBox