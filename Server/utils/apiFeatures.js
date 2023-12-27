export default class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    filter() {
        const queryObj = {...this.queryStr}
        const excludeFields = ['page', 'fields', 'sort', 'limit'];
        excludeFields.forEach(field => delete queryObj[field]);

        //advance filtering
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

        this.query = this.query.find(JSON.parse(queryStr))
        return this;
    }

    sorting() {
        if(this.queryStr.sort) {
            const sortStr = this.queryStr.sort.split(',').join(' ')
            this.query = this.query.sort(sortStr)
        }
        return this;
    }

    limitFields() {
        if(this.queryStr.fields) {
            const fields = this.queryStr.fields.split(',').join(' ');
            this.query = this.query.select(fields)
        }
        else {
            this.query = this.query.select('-__v');
        }
        return this;
    }

    paginate() {
        if(this.queryStr.page || this.queryStr.limit) {
            const page = this.queryStr.page * 1 || 1;
            const limit = this.queryStr.limit * 1 || 3;
            const skip = (page - 1) * limit;

            this.query = this.query.skip(skip).limit(limit);
        }

        return this;
    }
}