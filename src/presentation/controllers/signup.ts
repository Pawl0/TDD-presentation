import { MissingParamError } from '../errors/missing-param-error'
import { badRequest, ok } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { EmailValidator } from '../protocols/email-validator'
import { InvalidParamError } from '../errors/invalid-param-error'

export class SignUpController {

    private readonly emailValidator: EmailValidator

    constructor(emailValidator: EmailValidator) {
        this.emailValidator = emailValidator   
    }

    handle(httpRequest: HttpRequest):HttpResponse {
        const { name, email, password} = httpRequest.body

        if (!name) {
            return badRequest(new MissingParamError("name"))
        }
        if (!email) {
            return badRequest(new MissingParamError("email"))
        }

        const isValid = this.emailValidator.isValid(email)

        if (!isValid) {
            return badRequest(new InvalidParamError("email"))
        }

        const httpResponse = {
            body: {
                name,
                email,
                password
            }
        }

        return ok(httpResponse.body)
    } 
}