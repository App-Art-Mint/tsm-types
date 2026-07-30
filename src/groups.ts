export const adminGroups = ['admins', 'owners'] as const;
export type AdminGroup = (typeof adminGroups)[number];

export const editorGroups = [...adminGroups, 'editors'] as const;
export type EditorGroup = (typeof editorGroups)[number];

export const userGroups = ['users'] as const;
export type UserGroup = (typeof userGroups)[number];
