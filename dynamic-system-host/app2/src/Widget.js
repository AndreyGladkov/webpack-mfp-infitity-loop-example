import React from 'react';

import DateFnsAdapter from "@date-io/date-fns";
import format from 'date-fns/format';
import formatDistance from 'date-fns/formatDistance';
import subDays from 'date-fns/subDays';

const dateFns = new DateFnsAdapter();

console.log(dateFns);
const Button = () => (
    <button>
        App 2 Button
        {format(new Date(), "'Today is a' eeee")}
        <hr />
        {formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })}
    </button>
);

export default Button;
