import {AdditionalResult, BaseFrontmatter, ContentType, ResultFrontmatter,} from '../type/mdxType';

export function sortByDate(
    data: (BaseFrontmatter & AdditionalResult)[],
    type: ContentType
): ResultFrontmatter<typeof type>[] {
    return data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

