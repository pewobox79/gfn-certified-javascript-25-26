import qs from 'qs'
import { jumbotronFragment, referenceElementFragment } from './queryFragments';

export const DynamicContentQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                ...jumbotronFragment,
                ...referenceElementFragment
            },
        },
    },
}, {
    encodeValuesOnly: true,
});
