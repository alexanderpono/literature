export enum StoryType {
    HEADER1 = 'HEADER1',
    HEADER2 = 'HEADER2',
    HEADER3 = 'HEADER3',
    STORY = 'STORY',
    SUBSTORY = 'SUBSTORY'
}

export interface Story {
    type: StoryType;
    caption: string;
    url?: string;
}
