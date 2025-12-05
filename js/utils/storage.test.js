/* eslint-env node, jest */
/* global global */

import { expect, describe, it, beforeEach } from "vitest"
import { saveUser, getUsername } from "./storage"


describe('Testing getUsername function', () => {
    beforeEach(() => {
        //Creating a place to store our data
        const storage = {}

        //Mocking the local storage
        global.localStorage = {
            setItem: (key, value) => (storage[key] = value),
            getItem: (key) => storage[key]
        }
    })

    describe('saveUser', () => {
        it('Saving a user to our storage object', () =>{
            const testUser = {name: 'PeterParker'}
            saveUser(testUser)
            expect(localStorage.getItem("user")).toBe(JSON.stringify(testUser))
        })

        it('Retrieving user from our storage object', () => {
            localStorage.setItem('user', JSON.stringify({name: 'testUser'}))
            const retrievedUsername = getUsername()
            expect(retrievedUsername).toBe('testUser')
        })

        it('Checking if it returns null if there is no name in the storage', () => {
            const userName = getUsername()
            expect(userName).toBeNull()
        })
    })
})