// import {createIndexes} from "./indexes";
import {createUserCollection} from "./user";

const setupDb = async db => {
    try {
        const usersColExists = await db
            .listCollections({name: "users"})
            .hasNext();
        if (!usersColExists) {
            await createUserCollection(db);
        }
        // createIndexes(db);
        return true;
    } catch (error) {
        console.log(error);
        return true;
    }
};

export default setupDb;
