


import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider  from "next-auth/providers/twitter"



export const authConfig = {
    providers :[
        GithubProvider({
            clientId:"Ov23liGJud3mOIqCk8uU",
            clientSecret:"f4e6bebe923a5bbb230abb81c3d6cdbfda5404af"
        }),
        TwitterProvider({
            clientId:"XI7dxImsme7tEeH8nwQpnw3MM",
            clientSecret:"5zwpIGyRLIhHjwHh0aCkLC0UzW7p7D9hQmp4CLpFbpgnlEnYc4"
        })
    ]
}


export default NextAuth(authConfig);


