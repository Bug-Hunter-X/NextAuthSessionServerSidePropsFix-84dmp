# NextAuth session undefined in getServerSideProps - Next.js 15

This repository demonstrates a bug where NextAuth session is undefined in `getServerSideProps` even after successful login in Next.js 15.  The issue is related to how `unstable_getServerSession` is used with `getServerSideProps`.

## Bug Description

The provided code includes an About page that requires authentication using NextAuth.js.  The `getServerSideProps` function attempts to retrieve the session using `unstable_getServerSession`, but the session object consistently returns `undefined`, resulting in an unauthenticated experience even when the user is already logged in.

## Solution

The solution is to use `getServerSideProps` correctly for session checking and conditional rendering.