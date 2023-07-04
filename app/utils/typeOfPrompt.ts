export interface Prompt {
  id: string;
  name: string;
  description: string;
  strengths?: string;
}

export const prompt: Prompt[] = [
  {
    id: '646a2fc687e737835670b7b3',
    name: 'Bullet points with summary',
    description:
      'A note with Summary, and Additional Info. The Additional Info then further consist of bulleted points in Main Point, Action Items, Follow Up Questions, and Potential Argument Against.',

    strengths:
      'Suitable for brainstorming in any types of ideas. Good for translating messy thoughts into structured note.',
  },

  {
    id: '647391c118e8a4e1170d3ec9',
    name: 'Ask me everytime',
    description: '',
    strengths: '',
  },
];
