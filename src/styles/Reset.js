import { Style } from 'radium'
import Normalize from './Normalize'
import _ from 'lodash'

class Reset extends Style {};

Reset.defaultProps = {
  rules: _.assign({}, Normalize)
};

export default Reset
