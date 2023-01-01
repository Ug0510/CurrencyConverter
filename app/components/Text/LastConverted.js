import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({
   base, quote, basep, quotep,
}) => (
  <Text style={styles.smallText}>
    {basep}
    {' '}
    {base}
    {' '}
=
    {' '}
    {quotep}
    {' '}
    {quote}
    {' '}
is Last Conversion
  </Text>
);

LastConverted.propTypes = {
  base: PropTypes.string,
  quote: PropTypes.string,
  baseq: PropTypes.string,
  quotep: PropTypes.string,
};

export default LastConverted;