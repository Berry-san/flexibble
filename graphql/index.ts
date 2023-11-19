export const getUserQuery = `
    query GetUser($email:String!) {
        user(by: {email:$email}) {
            id
            name
            email
            avatarUrl
            description
            githubUrl
            LinkedInUrl
        }
    }
`

export const createUserMutation = `
    mutation CretaeUser($input:UserCreateInput!) {
        userCreate(input:$input){
            user {
                id
                name
                email
                avatarUrl
                description
                githubUrl
                LinkedInUrl
            }
        } 
    }
`
