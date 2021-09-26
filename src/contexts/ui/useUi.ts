import { useContext } from 'react';
import UiContext from './index';

const useUi = () => {
    const context = useContext(UiContext);
    return context;
};

export default useUi;
