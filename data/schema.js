// Change the number of items as required in the minItems and maxItems properties.

module.exports = {
  type: "object",
  properties: {
    users: {
      type: "array",
      minItems: 40,
      maxItems: 50,
      items: {
        type: "object",
        properties: {
          id: {
            $ref: "#/definitions/positiveInt"
          },
          name: {
            type: "string",
            faker: "name.findName"
          },
          dateDOB: {
            type: "string",
            chance: {
              birthday: {
                string: true
              }
            }
          },
          avatar: {
            type: "string",
            faker: "image.avatar"
          },
          stringLong: {
            type: "string",
            faker: "lorem.paragraph"
          },
          carPlate: {
            type: "string",
            chance: {
              hash: {
                length: 7,
                casing: "upper"
              }
            }
          },
          nickname: {
            type: "string",
            faker: "internet.userName"
          },
          addressFullStreet: {
            type: "string",
            faker: "address.streetAddress"
          },
          addressLatitude: {
            type: "string",
            faker: "address.latitude"
          },
          addressLongitude: {
            type: "string",
            faker: "address.longitude"
          },
          phoneMobile: {
            type: "string",
            faker: "phone.phoneNumberFormat"
          },
          email: {
            type: "string",
            format: "email",
            faker: "internet.email"
          },
          internetUrl: {
            type: "string",
            faker: "internet.url"
          },
          companyName: {
            type: "string",
            faker: "company.companyName"
          },
          colorHex: {
            type: "string",
            faker: "internet.color"
          },
          addressBuilding: {
            type: "string",
            faker: "address.secondaryAddress"
          }
        },
        required: [
          "id",
          "name",
          "dateDOB",
          "phoneMobile",
          "addressFullStreet",
          "addressBuilding",
          "addressLatitude",
          "addressLongitude",
          "email",
          "internetUrl",
          "nickname",
          "avatar",
          "carPlate",
          "companyName",
          "stringLong",
          "colorHex"
        ]
      }
    }
  },
  required: ["users"],
  definitions: {
    positiveInt: {
      type: "integer",
      minimum: 0,
      maximum: 10000,
      minimumExclusive: true,
      maximumExclusive: true
    }
  }
};
