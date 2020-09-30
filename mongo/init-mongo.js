db.getCollection('appConfigs').insert(
{
    "organization" : {
        "organizationId" : "gofair",
        "name" : "GO FAIR",
        "affiliations" : [],
        "description" : "FAIR Implementation Profile Wizard (FIP Wizard)"
    },
    "authentication" : {
        "defaultRole" : "researcher",
        "internal" : {
            "registration" : {
                "enabled" : true
            }
        },
        "external" : {
            "services" : []
        }
    },
    "privacyAndSupport" : {
        "privacyUrl" : null,
        "termsOfServiceUrl" : null,
        "supportEmail" : "barbara.magagna@gmail.com",
        "supportRepositoryName" : "fip-wizard/fip-wizard",
        "supportRepositoryUrl" : "https://github.com/fip-wizard/fip-wizard"
    },
    "dashboard" : {
        "widgets" : null,
        "welcomeWarning" : null,
        "welcomeInfo" : null
    },
    "lookAndFeel" : {
        "appTitle" : "FIP Wizard",
        "appTitleShort" : "FIP Wizard",
        "customMenuLinks" : [ 
            {
                "icon" : "fas fa-plus-square",
                "title" : "Create a FIP",
                "url" : "/projects/create?selected=gofair:fip-wizard:4.2.5",
                "newWindow" : false
            }
        ],
        "loginInfo" : null
    },
    "registry" : {
        "enabled" : false,
        "token" : ""
    },
    "questionnaire" : {
        "levels" : {
            "enabled" : false
        },
        "feedback" : {
            "enabled" : false,
            "token" : "",
            "owner" : "",
            "repo" : ""
        },
        "questionnaireVisibility" : {
            "enabled" : true,
            "defaultValue" : "PrivateQuestionnaire"
        },
        "questionnaireSharing" : {
            "enabled" : true,
            "defaultValue" : "RestrictedQuestionnaire"
        },
        "summaryReport" : {
            "enabled" : true
        }
    },
    "createdAt" : ISODate("2020-06-12T14:01:20.577Z"),
    "updatedAt" : ISODate("2020-06-12T14:01:20.577Z"),
    "submission" : {
        "enabled" : true,
        "services" : [
            {
                "id" : "nanopubSubmission",
                "name" : "Nanopub Submission",
                "description" : "Store data in configured triple store",
                "props" : [],
                "supportedFormats" : [
                    {
                        "templateId" : "gofair:fip-nanopub:0.3.0",
                        "formatUuid" : "9c7d572e-c273-4323-97a4-ab38f943c33a"
                    }
                ],
                "request" : {
                    "method" : "POST",
                    "url" : "http://submission_service:8080/submit",
                    "headers" : {
                        "Content-Type" : "application/trig"
                    },
                    "multipart" : {
                        "enabled" : false,
                        "fileName" : ""
                    }
                }
            }
        ]
    },
    "template" : {
        "recommendedTemplateId" : "gofair:fip-nanopub:0.3.0"
    }
})

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

db.getCollection('users').insertMany([
{
    "uuid" : "3ef96067-8e7a-479e-ae18-1be47f0e2a5d",
    "email" : "albert.einstein@example.com",
    "passwordHash" : "sha256|17|KOj9LS2y8IXDvo0DG8EW8A==|rduRLWmC7xAKKPAV0DHK2LQiaptQ4Xn3cWZgwuXmqMc=",
    "role" : "admin",
    "permissions" : [
        "UM_PERM",
        "ORG_PERM",
        "KM_PERM",
        "KM_UPGRADE_PERM",
        "KM_PUBLISH_PERM",
        "PM_READ_PERM",
        "PM_WRITE_PERM",
        "QTN_PERM",
        "DMP_PERM",
        "CFG_PERM",
        "SUBM_PERM",
        "TML_PERM"
    ],
    "active" : true,
    "createdAt" : ISODate("2020-06-12T14:01:20.282Z"),
    "updatedAt" : ISODate("2020-06-12T14:01:20.557Z"),
    "firstName" : "Albert",
    "lastName" : "Einstein",
    "affiliation" : null,
    "sources" : [
        "internal"
    ],
    "submissionProps" : [],
    "imageUrl" : null
},
{
    "uuid" : "30d48cf4-8c8a-496f-bafe-585bd238f798",
    "email" : "nikola.tesla@example.com",
    "passwordHash" : "sha256|17|Nwafc2BQvbcbYdV/2m/xVQ==|Mjgj3wrtK21qIoSmz8ODiro8Yr6Upc6V27whAobIz5k=",
    "role" : "dataSteward",
    "permissions" : [
        "KM_PERM",
        "KM_UPGRADE_PERM",
        "KM_PUBLISH_PERM",
        "PM_READ_PERM",
        "QTN_PERM",
        "DMP_PERM",
        "PM_WRITE_PERM",
        "SUBM_PERM",
        "TML_PERM"
    ],
    "active" : true,
    "createdAt" : ISODate("2020-06-12T14:01:20.295Z"),
    "updatedAt" : ISODate("2020-06-12T14:01:20.557Z"),
    "firstName" : "Nikola",
    "lastName" : "Tesla",
    "affiliation" : null,
    "sources" : [
        "internal"
    ],
    "submissionProps" : [],
    "imageUrl" : null
},
{
    "uuid" : "e1c58e52-0824-4526-8ebe-ec38eec67030",
    "email" : "isaac.newton@example.com",
    "passwordHash" : "sha256|17|lWASjBQx215ktNe7mjaWHg==|btUAw+oFeBVR9bDXmoVGLMSIrGOjbs+CxC6SR7FqouQ=",
    "role" : "researcher",
    "permissions" : [
        "PM_READ_PERM",
        "QTN_PERM",
        "DMP_PERM",
        "SUBM_PERM"
    ],
    "active" : true,
    "createdAt" : ISODate("2020-06-12T14:01:20.297Z"),
    "updatedAt" : ISODate("2020-06-12T14:01:20.557Z"),
    "firstName" : "Isaac",
    "lastName" : "Newton",
    "affiliation" : null,
    "sources" : [
        "internal"
    ],
    "submissionProps" : [],
    "imageUrl" : null
}
])

db.getCollection("packages").insertMany([

{
    "id" : "gofair:fair-convergence-matrix:3.0.0",
    "name" : "FAIR Convergence Matrix Questionnaire",
    "organizationId" : "gofair",
    "kmId" : "fair-convergence-matrix",
    "version" : "3.0.0",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting communities to explicitly declare their FAIR Implementation Profiles",
    "readme" : "# FAIR Convergence Matrix Questionnaire\n\nFAIR Convergence Matrix questionnaire prompting communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [GO FAIR project website](https://www.go-fair.org/today/fair-matrix/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FAIR Matrix instance](https://fair-matrix.ds-wizard.org)** to share them with the community and also please report potential issues and other comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : null,
    "forkOfPackageId" : null,
    "mergeCheckpointPackageId" : null,
    "events" : [ 
        {
            "eventType" : "AddKnowledgeModelEvent",
            "uuid" : "f3610d6f-48bd-45d4-8bf5-10cd28bb92fa",
            "parentUuid" : "00000000-0000-0000-0000-000000000000",
            "entityUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "name" : "New knowledge model"
        }, 
        {
            "eventType" : "EditKnowledgeModelEvent",
            "uuid" : "53064020-f0a7-40a9-a49c-9928323cd55e",
            "parentUuid" : "00000000-0000-0000-0000-000000000000",
            "entityUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "name" : {
                "changed" : true,
                "value" : "GEDE Technology Matrix Survey"
            },
            "chapterUuids" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "integrationUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "7b464f7b-4182-42d4-982f-0b4ecab9cee3",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "title" : "General Information about Survey",
            "text" : "This survey is run by RDA GEDE and GOFAIR to assess the set of technologies being used in the various research institutes, departments and projects. We expect substantial contributions from this survey to the work in RDA, GOFAIR, the ESFRI ERICs/projects, CODATA, etc. and it will help shaping the EOSC, etc. We also expect a continuous stream of input from an increasing number of participants and by participants updating their answers. We will regularly  generate snapshots of the database, analysing them by automatic means and published the summary results. \nWho should fill in this survey? We assume that the persons participating in this survey are responsible for managing and curating a sizable collection of data in your organisation or initiative. In general, the participant should be member of a tam responsible for running a repository.\nIn case of questions, please, don't hesitate to contact Zsuzsanna Szredi (zsuzsanna.szeredi@gmail.com). "
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "a38471d5-2e28-4033-81eb-06e2e7320e83",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : "General Information about Participant",
            "text" : "Please fill in some general information about the organisation and your role."
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bdebe4de-f3a3-46e9-b593-d17871a5df68",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f",
            "title" : "Contact Name",
            "text" : "Please, enter a contact name.",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "2c270766-9d14-4ab7-91ef-0da9d3140c04",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "3852df8a-faae-4638-8031-1ede6821fd73",
            "title" : "Email address",
            "text" : "Please, add your email address.",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b4b64d0c-7c36-4dac-9e3e-4e3e2969b75c",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "bfe229e5-4e8d-428f-a788-d0f5b42d5b82",
            "title" : "Organisation/Department/Project/Research Infrastructure",
            "text" : "Please, describe shortly your affiliation so that we can identify your community.",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a386a9bf-a7d4-4a99-b70d-03a96b3d6a02",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c3b7a244-b78f-4aa3-987c-89c221feec69",
            "title" : "Role & Background",
            "text" : "Please, indicate with few keywords your role in the organisation and your background. We would like to understand whether you are for example a data scientist, a data manager, etc. and whether you have an IT, library, research, etc. background.",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4aa26371-07ee-4e63-9e95-b9c7b5c3fcc0",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "91d90ad4-4aa3-4536-8c25-66bd14893fa6",
            "title" : "Research Domain",
            "text" : "Please, indicate the rseearch domain you are working in. ",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "40fcbde3-9883-4b23-8c3f-10c4f125765e",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "90ce1956-5538-466b-837a-0951d3c578fb",
            "title" : "Date of Response",
            "text" : "Please, specify the date of this response or update.",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "DateQuestionValueType"
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "1cf495db-0388-46df-8a92-41efbeb1a850",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "title" : "Repository Questions",
            "text" : "Here are a number of questions addressing the organisation of a repository which you are managing or using."
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "3dd6a1fc-91fb-4117-b8d9-99eec86ed84c",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "5b8e55c1-fb7b-4e11-ba20-9163e9b2821c",
            "title" : "Which repositories do you use for data?",
            "text" : "In the case that you are a researcher heavily creating data and depositing it in a repository, please, indicate the repositories you are using and which you will subsequently describe. \n- Local as well domain or central repositories are in use, often these are just local servers with discs that are managed by a data manager.\n- FAIR Principle 4 applies: (Meta)data are registered or indexed in a searchable resource.",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4e0898a2-4c12-4364-bb32-5ee284763627",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "88070d42-d5ff-414d-9d8b-4e06a8798b47",
            "title" : "Which repository software is being used?",
            "text" : "Often the repositories use specific software to manage the data. \n- In many cases specific repository software such as D-SPace, Fedora, etc are being used, these can also be home-made\n- Principle F4: (Meta)data are registered or indexed in a searchable resource",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "c2a25163-66cc-49d5-a377-2e910e257c43",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "f8f37f16-ca5d-4a6c-b788-59a2f11efb35",
            "title" : "Which repositories do you use for metadata?",
            "text" : "Often metadata is stored differently than the data. Please, indicate how meetadata is being stored.\n- Often repositories use for example relational databeses or spreadsheets on a disc for these purposes\n- Principle F4: (Meta)data are registered or indexed in a searchable resource\n\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "63b48934-62eb-4f17-a555-aa59a8d1f809",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "88070d42-d5ff-414d-9d8b-4e06a8798b47",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Often the repositories use specific software to manage the data. \n- In many cases specific repository software such as D-SPace, Fedora, etc are being used, these can also be home-made software.\n- Principle F4: (Meta)data are registered or indexed in a searchable resource."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "572f4b60-51c9-4e19-a0ac-934951e027f9",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "6e51e1c8-a8e2-4c08-931e-f790ecbe3e3e",
            "title" : "Do your repositories use local PIDs? If so which PID systems?",
            "text" : "In general, repositories use some method to assign local identifiers which are globally unique with data and sometimes also with metadata. Please, specify which method/technology is being used.\n-  Principle F1: (Meta)data are assigned globally unique and persistent identifiers.",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "e1ce4898-ecc8-4c45-a4e1-fa59e9469a72",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "612a9767-0eae-4ae6-80b7-ae7f4618fce7",
            "title" : "Do your repositories use globally resolvable PIDs? If so which PID systems?",
            "text" : "Increasingly often repositories use persistent and unique identifiers that can be resolved globally. \n- Most often repositories now use Handles and DOIs (which are Handles with prefix 10), but other systems such as ARKs may be in place or people just use URL/URI/IRIs.\n- Principle F1: (Meta)data are assigned globally unique and persistent identifiers.\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "5c081e01-8002-4aab-99fa-640d351a0f7f",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "62df9ba9-fa8a-42d5-aae6-b527e03fbde2",
            "title" : "Does the repository assign  PIDs manually or automatically?",
            "text" : "Traditionally, DOIs for example are assigned manually to eePublications, but in big data increasingly often PIDs are assigned automatically by scripts to cope with the mass of PID registration requests.\n-  Principle F1: (Meta)data are assigned globally unique and persistent identifiers\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "be4a43ec-e4d4-4148-a9f5-53e9244587a9",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "fe58b893-3e18-421d-a25d-386dd48e543a",
            "title" : "Which provider for globally resolvable PIDs do you use?",
            "text" : "Most often people use DataCite, for example, to register DOIs, and for general Handles, for example, local or ePIC services are being used. In the case of ARKs an ARK service provider will be used.\n- F1: (Meta)data are assigned globally unique and persistent identifiers\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9774245a-76d7-4de5-8415-ebc80ed9c8d4",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "1fb1550c-d6dd-4ceb-bedd-3703063cf9a8",
            "title" : "Is the PID Record used to store properties of the data or to refer to different typees of metadata?? ",
            "text" : "Increasingly often repositories use the PID record to store properties of the data and to refer to other information such as descriptive or system metadata. Please, indicate whether the PID record is used for such purposes. \n- F2: Data are described with rich metadata\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "87e9b15d-e734-4a68-83a2-62d685f6fa75",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "43381ac8-04e5-4d3d-a377-518775814795",
            "title" : "Are these repositories certified? If so which methods are used?",
            "text" : "Increasingly often repositories are applying Core Trust Seal (former Data Seal of Approval & World Data System) certification, for example. Others may apply ISO certification. However, most repositories still do not apply certification rules.\n- No FAIR principle directly covers certification of repositories and thus trustworthiness.\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f2b591d9-2b03-4b62-9f77-932313970eb0",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "6a60948a-545f-4c51-8562-6d197a7a79b7",
            "title" : "Are repository policies documented at their web-site? if so indicate the major ones.",
            "text" : "Repositories adhere to different kinds of policies such as, for example, about persistency, nr. of copies, openness levels, metadata creation, PID creation, etc. Please, mention the major ones.\n- R1.1. (Meta)data are released with a clear and accessible data usage license;  - This question is touching also other dimensions that are relevant for trustworthiness and sustainability.\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "c6850207-941c-48af-8764-cf9c6a1c3671",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "d39122f7-c38a-4df8-b1f3-affce38431bb",
            "title" : "Are the repositories registered in a registry? If so which registry?",
            "text" : "Increasingly often repositories register in services such as, for example, re3data to indicate to potential users their existence, their domain preferences, their offers, etc.\n- Principle F3: (Meta)data are registered or indexed in a searchable resource\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fd5b8eeb-3a73-4717-b70e-f8eba31b98a6",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "ac27032b-5ff8-4b21-9a8b-bbe34950dcfd",
            "title" : "Which persistancy garanties are typically given?",
            "text" : "The garanties for long-term persistency are varying between repositories as well as their methods to make data safe. Please, add an indication.\n\n- FAIR Principle A1 states that (meta)data should be accessible and A2 specifies that if data has been deleted, at least the  metadata should be accessible. A1: (meta)data are retrievable by their identifier using a standardized communication protocol; A2: metadata are accessible, even when the data are no longer available\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "92f8059d-6465-40de-aa73-8402016ba04e",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "title" : "Data",
            "text" : "Repositories store and curate data, in this chapter we address questions about the data being stored. "
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "15db1422-f354-4837-88e8-5df12c203a33",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "50e9a7d3-8085-4613-8251-3356bff35cc7",
            "title" : "Which are the most popular data types used?",
            "text" : "In general, many different data types ranging from texts, media recordings to highly specific scientific formats are being managed. Please, indicate the most relevant formats being used.\n\n- Principle I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.\n- Principlee I2: (meta)data use vocabularies that follow FAIR principles.\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "43c5034e-aab4-466f-b3ef-3a60a6ab456f",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "a33667be-d254-43f7-8f00-def7ce792f2d",
            "title" : "Which are the preferred data formats?",
            "text" : "Probably a large number of different data formats are being used. Please, indicate some major ones.\n\nPrinciple I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.\nPrinciple I2: (meta)data use vocabularies that follow FAIR principles.\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "b0904040-1ccd-4b0e-99bb-e89d6252ce5c",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "title" : {
                "changed" : true,
                "value" : "Data Questions"
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "78fe59e6-33f6-4ed3-9e4d-49fc355f4a4d",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "50e9a7d3-8085-4613-8251-3356bff35cc7",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "In general, many different data types ranging from texts, media recordings to highly specific scientific types are being managed. Please, indicate the most relevant formats being used.\n\n- Principle I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.\n- Principlee I2: (meta)data use vocabularies that follow FAIR principles.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "55536e8f-577b-4470-8870-3fb8c48c658b",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "a33667be-d254-43f7-8f00-def7ce792f2d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "In addition to types, probably a large number of different data formats are being used. Please, indicate some major ones.\n\nPrinciple I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.\nPrinciple I2: (meta)data use vocabularies that follow FAIR principles.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "987f6629-cd09-4ebd-bd75-8255853834e9",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "50e9a7d3-8085-4613-8251-3356bff35cc7",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "In general, many different data types ranging from texts, media recordings to highly specific scientific types are being managed. Please, indicate the most relevant types being used. (In this context types are meant to be overall categories such as \"media\", while formats would be in the case of media \"jpg, png, wav, mp4, mpg, etc.)\n\n- Principle I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.\n- Principlee I2: (meta)data use vocabularies that follow FAIR principles.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "66a18dc5-fa9e-4c02-8868-9ec24ce78522",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "830e2cae-d5ef-4b9b-9d8f-e4616d8cc776",
            "title" : "New question",
            "text" : "Do the formats mentioned include metadata headers? If so which?\n\nMany formats broadly used in research such as dicom, jpg, netCDF, etc. include metadata fields in their headers which can be extracted.\nPrinciple I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ac61afbb-00e5-4135-8c99-5cef87732bf0",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "eba8315f-6135-427c-8380-641d2282c7ff",
            "title" : "Does the repository provide search on data?",
            "text" : "Some repositories store structured data or texts on which content search is being supported. Some advanced rpositories also offer search on music patterns or pictures, for example. Pleease, indicate whether such methods are supported.\n\nF4: (meta)data are registered or indexed in a searchable resource\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1cae678b-9286-44f6-9b7a-5231824b9682",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "9c67ba3b-d278-4875-9969-45772e5d5bba",
            "title" : "Are the schemas registered in a common registry?",
            "text" : "Some schemas/formats such as MPEG media files are standardised and well described and are typed by the MIME type registry, others such as netCDF, for example, are well described in open web-pages maintained by large organisations.\n\nPrinciple I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "a585b12f-9067-4373-874c-e78702c35552",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "title" : "Metadata Questions",
            "text" : "Primarily metadata is crucial to understand what the data, basically a structured sequence of bits, is encoding. However, there are many other kinds of metadata such as assertions about "
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "8cde7aad-5288-46a4-83f5-85d497747fa1",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Primarily metadata is crucial to understand what the data, basically a structured sequence of bits, is encoding. However, there are many other kinds of metadata such as assertions about deep scientific matters, access permissions and more. \nPlease, fill in a number of questions about metadata."
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a96327b3-4bea-4716-be27-8b654a5ece35",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "a62e82ca-8c17-4e06-8284-eefbe7876219",
            "title" : "Which metadata schemas are mostly used?",
            "text" : "Most people still use home-made excel sheets or databases to cover metadata, others use XML schemas that are defined within the community, etc. Increasingly often these schemas are broadly agreed in a community. Please, enter how the repositories are handling metadata, if available refer to a schema and indicate its community relevance.\n- Principle I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation; \n- Principle R1.3: (meta)data meat domain-relevant community standards\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bb7ce64c-a4ff-429d-aec6-10545da10009",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "05ee37f8-a66e-4f0d-85b5-4d0a2bf68df1",
            "title" : "Are all categories used in the schemas defined in open registries?",
            "text" : "Are the semantic concepts used in your metadata schema well-defined and openly registered so that others can point to them and/or reuse them. If so, please, point to the location where the vocabularies and categories are being defined. \n- I2: (meta)data use vocabularies that follow FAIR principles\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "49daf9e8-9c0a-4033-9ecc-b0e97007ed0a",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "3b66a563-29da-43a7-9719-115ded25d557",
            "title" : "How is provenance included?",
            "text" : "Most metadata schemas use some categories describing provenance without using standard categories, others may use separate W3C PROV categories included in separate provenance descriptions. There are different ways how to include provenance and which categories are being used. Please, indicate how provenance is included and whether a standard vocabulary is being used.\n- F2: data are described with rich metadata; R1.2: (meta)data are associated with detailed provenance\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "847f2c14-49a5-4112-9385-8f175d416989",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "a2b74356-444d-4522-8c08-bf772bc315a0",
            "title" : "Are PIDs included in the metadata description?",
            "text" : "If PIDs are assigned by repositories, they should be findable in the metadata decription in a clearly defined metadata attribute. Please, indicate whether PIDs aree included in the metadata and if so which attribute is used.\n- I3: (Meta)data include qualified references to other meta(data); \n- F3: Metadata clearly and explicitly include the identifier of the data they describe\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8787564e-1e02-4aca-9eba-e9575a0d9093",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "e691ed3c-7331-44eb-94b8-d4d5c4554376",
            "title" : "What is the primary storage format for metadata?",
            "text" : "Most often people still use spreadsheets and relational databases to store metadata, others use XML files or RDF stores. Many other possibilities can be thought of. Please indicate what the primary sotragee format of metadata is.\nI1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "cb242e6b-2dc5-4062-929e-b3698a419675",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "be533faa-6729-4b2b-9b18-2eb2466eaf24",
            "title" : "Which are the supported metadata export formats?",
            "text" : "Metadata is being transformed and exported in various formats to allow harvesting and re-using them for various purposes such as building large search indeexes. Often created export formats HTML, XML, JSON and RDF. \n- I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bcd28c73-e43e-4431-bfbf-9e3432747a8b",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "4eb99e26-1f0b-4d8e-97d8-92908d18ceae",
            "title" : "Does your repository support a local search engine?",
            "text" : "Many repositories offer their own metadata search engine covering their collections. Please, indicate whether this is true and give a URL if possible.\n- F4: (meta)data are registered or indexed in a searchable resource\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "c74b0fed-101c-46f6-a9b2-d00c1c8e3eac",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "2a22afb6-7133-468e-9b74-1cd0673d1e07",
            "title" : "Which metadata exchange/harvesting methods are supported?",
            "text" : "Repositories, in general, offer theeir metadata to be harvested using a specific method. Often repositories simply exchange XML files, many use OAI-PMH including offering DC convrsions, others may already make use of resourceSync. Please, specify which method is used by the repositories.\n- I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "c8e63a9f-bd5a-41ef-a04f-11bb2754ded6",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "8171a0da-92da-4d77-be20-50e392560046",
            "title" : "Do you support external search engines?",
            "text" : "Many repositories offer their metadata to specific community-based  search engines. If so, please, indicate a few major ones and if possible add URLs.\n- F4: (meta)data are registered or indexed in a searchable resource\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "5fd2f796-5b85-47b6-8a47-8558a38a5610",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "6300bde5-8159-4734-b9a3-870cf86b2ab9",
            "title" : "Do repositories make clear statements about access policies?",
            "text" : "Currently only few repositories provide clear access and license information. The formalisation of licenses via Creative Commons or other license types has not been widely adopted yet. Often this information is being offered in Code of Conducts or other means. Please, specify whether license information is given and how it is done.\n- R1.1. (Meta)data are released with a clear and accessible data usage license\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d6e76bfe-d728-42ec-8b90-66f7fcbf5dbc",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "280da555-de60-49e9-b3ba-398024b90528",
            "title" : "Is your metadata machine actionable?",
            "text" : "Do you believe that the metadata managed by the repository can be processed by machines?  This requires, for example, that  license and other information is encoded in a formal laguage. Please, indicated whether metadata is machine actionable and if not why not.\n- I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation; \nR1.1. (Meta)data are released with a clear and accessible data usage license\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "3025bf42-efb5-4203-9093-91c220e86103",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "title" : "Access Mechanisms",
            "text" : "Accessing metadata and data is finally very important for being able to reuse them in different contexts. A number of FAIR principles refer to access mechanisms. "
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9461f13b-fc81-4dae-aa7f-5464b22a5449",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "07b5682f-8029-49db-9649-8c4e37eb57ef",
            "title" : "How is authentication done?",
            "text" : "A number of different techniques are being used to do authentication in distributeed scenarios when users want to access data. Please, describe the methods of authentication which are supported by the repository. Some use Shibboleth paired with eduGain, many other methods are in use.\n- A1.2: The protocol allows for an authentication and authorisation where necessary\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8188f0be-0b46-42f2-b349-4ad7eb045acc",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "2b459840-4bf3-47cf-8115-560c5490f861",
            "title" : "Does the repository maintain an own user database?",
            "text" : "In most cases still local user databases are used by repositories to store identities and to pair them with authorisation information. Often distributed solutions do not work for all users. Please, describe the mechanisms being used.\n- A1.2: The protocol allows for an authentication and authorisation where necessary\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9029e85f-3461-4f67-b0c8-ccf79d2054dc",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "b711d8fb-58c9-4b39-8d91-fe0762ad0aed",
            "title" : "Do you use ORCID for user identification during authentication?",
            "text" : "ORCIDs are widely used for publication purposes and most reesearchers will have an ORCID already.  Please, specify whether these ORCIDs are being used for distributed authentiation purposes?\n- A1.2: The protocol allows for an authentication and authorisation where necessary\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0146ab82-4c52-40e1-9857-1e392d048fea",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "d8cd22b1-fef5-48d5-b15b-fea2bf767393",
            "title" : "What is the major access technology supported?",
            "text" : "There are a large number of different access technologies being used by repositories. Please, indicate the major components involved.\n- A1.1: The protocol is open, free and universally implementable\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ead960d0-1f3d-4045-bc30-e33caffc6ab3",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "2430cd22-cdda-497e-b1bb-c76ad3eecc67",
            "title" : "How is authorization done?",
            "text" : "Authorisation in distributed scenarios is currently not well supported. Please, indicate the process and the major components involved in authorisation. \n- A1.2: The protocol allows for an authentication and authorisation where necessary\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "772efae3-15de-4f31-b1d3-9330f16950d1",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "2652c066-8c47-4933-a26e-0cba7220b0b9",
            "title" : "Which specific licenses do you use for your data?",
            "text" : "Does the repository use specific licenses types for data.  Creative Common licenses or similar start to become more popular currently. Please, specify which kinds of licences are used. In case the use of a Code of Conduct specify a URL.\n- R1.1. (Meta)data are released with a clear and accessible data usage license\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "18340499-e345-4420-8761-e11763c68bdc",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "e0b7b7b1-fb29-434c-99e8-92b04caa79da",
            "title" : "Are metadata openly available?",
            "text" : "Please, specify whether the metadata being managed is openly accessible via some access mechanism.\n- R1.1. (Meta)data are released with a clear and accessible data usage license\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "e1b25fb4-42b2-4772-8b28-e9bc416c9d81",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "6c4591f5-18cf-452e-a846-47aee9650a61",
            "title" : "Data Management Plans",
            "text" : "Increasingly often funders and other actors such as repositories expect to provide data managment plans. "
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f556b267-3e82-403c-8a05-5f7f05aa4663",
            "parentUuid" : "6c4591f5-18cf-452e-a846-47aee9650a61",
            "entityUuid" : "192e8c2f-a8fe-4e01-82a2-1074c3baffa2",
            "title" : "Do you use or provide specific DMP tools?",
            "text" : "\nWhich DMP tool are you using or advocating in your community\n",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0f8381ac-0ab0-47ea-8fd9-95c6ca93fc90",
            "parentUuid" : "6c4591f5-18cf-452e-a846-47aee9650a61",
            "entityUuid" : "192e8c2f-a8fe-4e01-82a2-1074c3baffa2",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "\nPlease, indicate which DMP tool are you using or advocating in your community.\n"
            },
            "requiredLevel" : {
                "changed" : true,
                "value" : 1
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : true,
                "value" : "TextQuestionValueType"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "3795f7c4-3cc8-4d39-8387-18ac206105d1",
            "parentUuid" : "6c4591f5-18cf-452e-a846-47aee9650a61",
            "entityUuid" : "fba36681-ebc6-4e81-ab38-0d85d299d7a5",
            "title" : "Do you apply special data publishing steps?",
            "text" : "In many cases researchers take specific data curation steps before officially publishing data, and they then provide pecific metadata as required for example by DataCite to create DOIs. Please, indicate whether special measures are taken to publish data. \n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "5d44f97e-1964-4d03-9e3c-1cfc53a6535d",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "b6cecb73-9326-4049-9eda-bc3cc62267e8",
            "title" : "Data Processing Methods",
            "text" : "Increasingly often workflows are being applied to process data. Partly these workflow frameworks are offered by the repository and in other cases the workflows are being executed locally on dedicated machines.\n"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1ff2cb0f-baa7-458f-8f8a-858af0676e14",
            "parentUuid" : "b6cecb73-9326-4049-9eda-bc3cc62267e8",
            "entityUuid" : "1dbbf181-260b-48f5-b937-bb10cdb37bc1",
            "title" : "Do you apply workflow frameworks for your data?",
            "text" : "Please, indicate whether you are using workflows to process data and where these workflows are being executed.",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "2a65e40c-6b94-4480-ac0c-775cfa0a4e2a",
            "parentUuid" : "b6cecb73-9326-4049-9eda-bc3cc62267e8",
            "entityUuid" : "51a33a7b-d503-4f7c-9372-2b1d9e643ae5",
            "title" : "Do you use distributed workflow tools? if so, which?",
            "text" : "Distributed workflows are an emerging application. Please, indicate whether you use such distributed workflows and in case you do, indicate which.",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "c34013c4-d6c9-4111-b962-b2d90441888e",
            "parentUuid" : "b6cecb73-9326-4049-9eda-bc3cc62267e8",
            "entityUuid" : "e09ac9ef-3099-4723-ae68-c5472a21a50b",
            "title" : "Do you offer other type of support or analytics services?",
            "text" : "Please, indicate the kind of support or analytic services you are using offered by a repository or another center.\n\n\n\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a9bcb84b-04fd-4f10-bc23-4160ff1f0d84",
            "parentUuid" : "b6cecb73-9326-4049-9eda-bc3cc62267e8",
            "entityUuid" : "f45a9923-1b39-4c0b-8a4f-46ca7de85b8b",
            "title" : "Does your repository offer data products?",
            "text" : "Please, indicate whether the repository are offering ready-made products on the data stored.",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "213964b1-df1f-46e4-ac5c-a8c744975529",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "title" : "Semantic Questions",
            "text" : "Supporting semantic cross-walks is getting increasingly important. Therefore, we include three questions about vocabularies, ontologies etc. that might be used to create your metadata and data."
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "52161784-c91d-4469-b391-9c17e4148f5e",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "cdc735e2-4de4-4aad-99f9-0b2ea4a65266",
            "title" : "Are vocabularies and ontologies of generic type are being used?",
            "text" : "Metadata and data are often including generic vocabularies, ontologies etc. such as, for example, geographic names or language vocabularies. Please, indicate which ones you are using mainly and add URLs.\n\n- I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation, \n- I2: (meta)data use vocabularies that follow FAIR principles, \n- R1: (Meta)data are richly described with a plurality of accurate and relevant attributes\n\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1957054a-af88-4b6d-b9fe-84bb4fea74f7",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "d05b612f-640d-4d50-9829-2fcff208d0f1",
            "title" : "Do you use discipline specific vocabularies, ontologies etc.? ",
            "text" : "Do you use discipline specific vocabularies, ontologies etc.? If so point to the registries.\n\na large variety of different vocabularies, ontologies etc. are being used in the various disciplines, please, specify the major ones and give URLs \n\nI1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation, \nI2: (meta)data use vocabularies that follow FAIR principles, \nR1: (Meta)data are richly described with a plurality of accurate and relevant attributes\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6b373670-579d-4720-bbd8-a21f6b69f4f6",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "d05b612f-640d-4d50-9829-2fcff208d0f1",
            "title" : {
                "changed" : true,
                "value" : "Are discipline specific vocabularies, ontologies etc.? "
            },
            "text" : {
                "changed" : true,
                "value" : "Metadata and data are often including generic vocabularies, ontologies etc. such as, for example, geographic names or language vocabularies. Please, indicate which ones you are using mainly and add URLs.\n\na large variety of different vocabularies, ontologies etc. are being used in the various disciplines, please, specify the major ones and give URLs \n\nI1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation, \nI2: (meta)data use vocabularies that follow FAIR principles, \nR1: (Meta)data are richly described with a plurality of accurate and relevant attributes\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bba7b59c-5370-4a29-82cf-e73e092ae75b",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "d05b612f-640d-4d50-9829-2fcff208d0f1",
            "title" : {
                "changed" : true,
                "value" : "Are discipline-specific vocabularies and ontologies being used?"
            },
            "text" : {
                "changed" : true,
                "value" : "Metadata and data are often including discipline-specific vocabularies, ontologies etc.  Please, indicate which ones you are using mainly and add URLs.\n- I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation, \n- I2: (meta)data use vocabularies that follow FAIR principles, \n- R1: (Meta)data are richly described with a plurality of accurate and relevant attributes\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6807e4ad-ded7-4f49-ba22-9be44ff040f4",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "46baaa46-da2d-4112-b005-b75af045195a",
            "title" : "Are project-defined vocabularies, ontologies etc. being used?",
            "text" : null,
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9198c34b-7deb-457a-aef6-e99174c36825",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "46baaa46-da2d-4112-b005-b75af045195a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Metadata and data are often including project-specific vocabularies, ontologies etc.. Please, indicate which ones you are using mainly and add URLs.\n\n- I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation, \n- I2: (meta)data use vocabularies that follow FAIR principles, \n- R1: (Meta)data are richly described with a plurality of accurate and relevant attributes\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bebdfff5-d997-4ccd-94f7-7a3d2cecddaf",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "cdc735e2-4de4-4aad-99f9-0b2ea4a65266",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Metadata and data are often including generic vocabularies, ontologies etc. such as, for example, geographic names or language names. Please, indicate which ones you are using mainly and add URLs.\n\n- I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation, \n- I2: (meta)data use vocabularies that follow FAIR principles, \n- R1: (Meta)data are richly described with a plurality of accurate and relevant attributes\n\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8f8276e1-9c9b-40c2-b2be-34b0694b2630",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "46baaa46-da2d-4112-b005-b75af045195a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Metadata and data are often including project-specific vocabularies, ontologies etc. Please, indicate which ones you are using mainly and add URLs.\n\n- I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation, \n- I2: (meta)data use vocabularies that follow FAIR principles, \n- R1: (Meta)data are richly described with a plurality of accurate and relevant attributes\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "4da6f103-8a81-4f8f-b7bf-c03bbce3d67c",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "b054bc78-b560-4dd9-a3c8-4f379195193b",
            "title" : "State of FAIRness",
            "text" : "Comparing the created data and the way repositories act with the FAIR principles is not always a straightforward activity. Nevertheless, we would like to ask your opinion about the state of F, A, I and R from your point of view and understand where you see major gaps."
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4fe64484-5891-462f-8c81-e7b4c4aabff2",
            "parentUuid" : "b054bc78-b560-4dd9-a3c8-4f379195193b",
            "entityUuid" : "d6ae1284-588e-4c4c-835c-430dcea8e989",
            "title" : "Do you believe that your data is findable? ",
            "text" : "Please, give your view on the state of \"findability\" of your data and indicate major gaps. ",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a4010c8b-7902-4a96-9d4b-f8fb0967be1d",
            "parentUuid" : "b054bc78-b560-4dd9-a3c8-4f379195193b",
            "entityUuid" : "1b926623-c115-49de-b4f8-c0675b5fb457",
            "title" : "Is your data accessible?",
            "text" : "Please, give your view on the state of \"accessibility\" of your data and indicate major gaps. ",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "30244e46-5c21-4367-895c-13eefd5cf630",
            "parentUuid" : "b054bc78-b560-4dd9-a3c8-4f379195193b",
            "entityUuid" : "1b926623-c115-49de-b4f8-c0675b5fb457",
            "title" : {
                "changed" : true,
                "value" : "Do you blieve that your data accessible?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4dfc7740-c23d-4c6a-be0c-1a374dc96793",
            "parentUuid" : "b054bc78-b560-4dd9-a3c8-4f379195193b",
            "entityUuid" : "45bc1efe-e61f-48f0-b33c-c04ee1d5aaf0",
            "title" : "Do you believe that your data is interoperable?",
            "text" : "Please, give your view on the state of \"interoperability\" of your data and indicate major gaps. ",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6abfd71f-f786-40f3-97a8-dbfff01ee5c7",
            "parentUuid" : "b054bc78-b560-4dd9-a3c8-4f379195193b",
            "entityUuid" : "11c9b499-3d60-44bd-afde-5febfdc8e775",
            "title" : "Do you believe that your data is re-usable?",
            "text" : "Please, give your view on the state of \"interoperability\" of your data and indicate major gaps. ",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "d7dfa733-baa1-44b2-8749-f4666e36b5bf",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "This survey is run by RDA GEDE and GOFAIR to assess the set of technologies being used in the various research institutes, departments and projects. We expect substantial contributions from this survey to the work in RDA, GOFAIR, the ESFRI ERICs/projects, CODATA, etc. and it will help shaping the EOSC, etc. We also expect a continuous stream of input from an increasing number of participants and by participants updating their answers. We will regularly  generate snapshots of the database, analysing them by automatic means and published the summary results. \nWho should fill in this survey? We assume that the persons participating in this survey are responsible for managing and curating a sizable collection of data in your organisation or initiative. In general, the participant should be member of a tam responsible for running a repository.\n\nIn the explanations of the questions we indicate the FAIR principles that are related with a \"-\" sign. We will offer where applicable also possible values indicated with a \"+\" sign.\n\nIn case of questions, please, don't hesitate to contact Zsuzsanna Szredi (zsuzsanna.szeredi@gmail.com). "
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "a80120f6-a9f0-43e1-bd6d-239b4e7dfa72",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "6c4591f5-18cf-452e-a846-47aee9650a61",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "192e8c2f-a8fe-4e01-82a2-1074c3baffa2", 
                    "fba36681-ebc6-4e81-ab38-0d85d299d7a5"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b31077fa-ada1-416a-9910-89fa74c6f6a1",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please, enter a contact name in case of questions."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "4cec8289-6e4b-456b-89e7-2d7726778c0d",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Here are a number of questions addressing the organisation of a repository which you are managing or using, i.e. you are \n- either a repository manager or curator\n- a researcher using a repository frequently\n- or a researcher running a small departmental/project repository"
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "48ad32ee-d03a-4d0b-9fdb-baac1c5d43b0",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "5b8e55c1-fb7b-4e11-ba20-9163e9b2821c",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "In the case that you are a researcher heavily creating data and depositing it in a repository, please, indicate the repositories you are using and which you will subsequently describe. If you are a repository manager describe your repository. Local as well domain or central repositories are in use, often these are just local servers with discs that are managed by a data manager.\n- F4 applies: (Meta)data are registered or indexed in a searchable resource.\n+ Examples for repositories are: local (can be many), domain (can be many), generic (B2SAFE, B2SHARE, B2DROP, ZENODO, GITHUB, Dropbox, FIGSHARE, etc.)"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "550d7688-a2c9-4cb2-a567-90c6e2379fa6",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "88070d42-d5ff-414d-9d8b-4e06a8798b47",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Often the repositories use specific software to manage the data. Some are widely used packages, others are specific home-made dvelopments.\n\n- F4 applies: (Meta)data are registered or indexed in a searchable resource.\n+ Examples for typical repository software packages are: D-SPace, Fedora, etc."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "76391e48-fa78-43aa-982a-1ecad4ecbe3b",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "f8f37f16-ca5d-4a6c-b788-59a2f11efb35",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Often metadata is stored differently than the data. Please, indicate how metadata is being stored. Here we are only interested in the type of store.\n\n- F4 applies: (Meta)data are registered or indexed in a searchable resource\n+ Examples to store metadata are: relational databases, spreadsheets, XML Files, RDF assertions in Triple Stores, etc.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a12d7967-a1b1-4173-9410-eecd4dd4f51e",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "6e51e1c8-a8e2-4c08-931e-f790ecbe3e3e",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "In general, repositories use some method to assign local identifiers which are globally unique with data and sometimes also with metadata. There are many methods being used in software packages. Please, specify which method/technology is being used.\n-  F1 applies: (Meta)data are assigned globally unique and persistent identifiers.\n+ Examples for local IDs are: URNs, UUIDs, NetCDF Oceansites ID, etc."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ec0dfb84-4eb5-4853-8db9-8e2f84e85267",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "612a9767-0eae-4ae6-80b7-ae7f4618fce7",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Increasingly often repositories use persistent and unique identifiers that can be resolved globally. There are not so many schemes in use.\n\n- F1 applies: (Meta)data are assigned globally unique and persistent identifiers.\n+ Examples are the most often used Handles and DOIs (which are Handles with prefix 10), ARKs, URL/URI/IRIs, BAR codes, etc."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "588dd872-475e-4481-bcdd-2fd36886e177",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "62df9ba9-fa8a-42d5-aae6-b527e03fbde2",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Traditionally, DOIs for example are assigned manually to eePublications, but in big data increasingly often PIDs are assigned automatically by scripts to cope with the mass of PID registration requests.\n-  F1 applies: (Meta)data are assigned globally unique and persistent identifiers\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "95567943-8730-4972-b607-b2a0ccdef893",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "fe58b893-3e18-421d-a25d-386dd48e543a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "When assigning a global resolvable PID one needs to collaborate with a service provider which can issue PIDs excpt than one is using an own service that is connected to the global nework. \n- F1 applies: (Meta)data are assigned globally unique and persistent identifiers\n+ Examples: if you are registering DOIs, you will normally use providers such as DataCite or CrossRef, etc. If you ar using general Handles, for example, local or ePIC services are being used. In the case of ARKs an ARK service provider will be used."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "c1417676-5854-4ecd-ae0e-d4d0dc7b354b",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "1fb1550c-d6dd-4ceb-bedd-3703063cf9a8",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Increasingly often repositories use the PID record to store properties of the data and to refer to other information such as descriptive or system metadata. Please, indicate whether the PID record is used for such purposes. \n- F2 applies: Data are described with rich metadata\n+ The RDA Kernel Information group collected a number of useful attributes such as checksum, path to access the bit sequence, type of the bit sequence, path to the metadata, PID of previous version, etc.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "9baae131-3cf3-4e59-8461-4180128d2bf2",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "5b8e55c1-fb7b-4e11-ba20-9163e9b2821c", 
                    "88070d42-d5ff-414d-9d8b-4e06a8798b47", 
                    "f8f37f16-ca5d-4a6c-b788-59a2f11efb35", 
                    "6e51e1c8-a8e2-4c08-931e-f790ecbe3e3e", 
                    "612a9767-0eae-4ae6-80b7-ae7f4618fce7", 
                    "62df9ba9-fa8a-42d5-aae6-b527e03fbde2", 
                    "fe58b893-3e18-421d-a25d-386dd48e543a", 
                    "1fb1550c-d6dd-4ceb-bedd-3703063cf9a8", 
                    "43381ac8-04e5-4d3d-a377-518775814795", 
                    "6a60948a-545f-4c51-8562-6d197a7a79b7", 
                    "d39122f7-c38a-4df8-b1f3-affce38431bb", 
                    "ac27032b-5ff8-4b21-9a8b-bbe34950dcfd"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ea4eb394-7d8f-4c07-81df-a0c03f86504b",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "43381ac8-04e5-4d3d-a377-518775814795",
            "title" : {
                "changed" : true,
                "value" : "Are the repositories mentioned certified? If so which methods are used?"
            },
            "text" : {
                "changed" : true,
                "value" : "Increasingly often repositories are applying Core Trust Seal (former Data Seal of Approval & World Data System) certification, for example. Others may apply ISO certification. However, most repositories still do not apply certification rules.\n- No FAIR principle directly covers certification of repositories and thus trustworthiness.\n+ Examples for repository certification systems are: CoreTrustSeal, ISO 16363, DIN 31644 "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a8c94570-8e13-4c14-a906-c0abdb5dcd31",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "43381ac8-04e5-4d3d-a377-518775814795",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Increasingly often repositories are applying Core Trust Seal (former Data Seal of Approval & World Data System) certification, for example. Others may apply ISO certification. However, most repositories still do not apply certification rules.\n- No FAIR principle directly covers certification of repositories and thus trustworthiness.\n+ Examples for repository certification systems are: CoreTrustSeal, ISO 16363, DIN 31644, Data Seal of Approval (replaced by CTS), World Data System (replaced by CTS)"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1ebb1092-d1c1-412a-837b-3f513aebdc83",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "6a60948a-545f-4c51-8562-6d197a7a79b7",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Repositories adhere to different kinds of policies which should be made clear at the web-site.\n- R1.1. applies: (Meta)data are released with a clear and accessible data usage license;  \n- This question is touching also other dimensions that are relevant for trustworthiness and sustainability.\n+ Examples for policy types are: persistency, nr. of automatic copies, openness levels, way of metadata creation/extension, PID creation, access methods, terms of use, code of conduct, etc.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b2c0cd07-87c1-4ac6-857a-52254e904b7d",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "d39122f7-c38a-4df8-b1f3-affce38431bb",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Increasingly often repositories register in services to indicate their existence, their domain preferences, their offers, etc. to potential users and funders. There are generic registries and of course many domain specific registries\n- F3 aplies: (Meta)data are registered or indexed in a searchable resource\n+ Examples for generic registries are: re3data, wds, DataCite, etc.\n+ Examples for domain specific registries can be found in many research infrastructures such as CLARIN: https://www.clarin.eu/content/overview-clarin-centres  "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bffe98ed-4f3a-4a1c-ac51-9bc9b06dd589",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "ac27032b-5ff8-4b21-9a8b-bbe34950dcfd",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "The garanties for long-term persistency are varying between repositories as well as their methods to make data safe. Please, add an indication about guarantees and methods to create redundant copiees etc.\n-  A1 applies: (meta)data are retrievable by their identifier using a standardized communication protocol; \n- A2 applies: metadata are accessible, even when the data are no longer available\n+ A well known example is that many repositories give guarantees of 10 years, since this is the period one needs to manage data to allow checks.\n+ Often repositories do not give guarantees for more than 2 or 3 years which is there funding guarantee.\n+ Often commercial repositories can't give guarantees, since their business can fail."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f1422aee-f71c-4ba1-a8d9-48fef2bd0818",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "50e9a7d3-8085-4613-8251-3356bff35cc7",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "In general, many different data types ranging from texts, media recordings to highly specific scientific types are being managed. Please, indicate the most relevant types being used. (In this context types are meant to be overall categories such as \"media\", while formats would be in the case of media \"jpg, png, wav, mp4, mpg, etc.).\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.\n- I2 applies: (meta)data use vocabularies that follow FAIR principles.\n+ Examples for types are: audio, video, media, text, sructured, time series, relational database, trajectories, etc."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8802cf4e-cb93-4199-bdc2-b2372637b960",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "a33667be-d254-43f7-8f00-def7ce792f2d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "In addition to types, probably a large number of different data formats are being used. Please, indicate some major ones.\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.\n- I2 applies: (meta)data use vocabularies that follow FAIR principles.\n+ Typical examples for types are: txt, xls, doc, pdf, csv, netCDF, wav, mp4, jpg, json, etc."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "aa26e732-2d6a-49f2-bb4c-8f018c451a69",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "830e2cae-d5ef-4b9b-9d8f-e4616d8cc776",
            "title" : {
                "changed" : true,
                "value" : "Do the formats mentioned include metadata headers? If so which?"
            },
            "text" : {
                "changed" : true,
                "value" : "Many formats broadly used in research include metadata fields in their headers which can be extracted automatically.\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation\n+ Typical examples for formats with headers are: jpg, dicom, netCDF, etc."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "63f3c726-34df-4478-90e2-a03ff0b456b6",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "eba8315f-6135-427c-8380-641d2282c7ff",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Some repositories store structured data or texts on which content search is being supported. Some advanced rpositories also offer search on music patterns or pictures, for example. Pleease, indicate whether such methods are supported.\n- F4 applies: (meta)data are registered or indexed in a searchable resource\n+ There may be many examples allowing this feature."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "68cf5956-4ce6-4bb3-a993-282f87f448a4",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "9c67ba3b-d278-4875-9969-45772e5d5bba",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Some schemas/formats such as MPEG media files are standardised and well described and are typed by the MIME type registry, others such as netCDF, for example, are well described in open web-pages maintained by large organisations.\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.\n+ Examples for well specified data formats are all meedia formats: mp4, wav, jpg, mpeg, etc. (https://en.wikipedia.org/wiki/Moving_Picture_Experts_Group)\n+ As an example for a well-specified metadata we can refer to CMDI (https://www.clarin.eu/content/component-metadata) and DDI (http://www.ddialliance.org/community/join).\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "59e40206-1cf7-45e9-948c-b1525d273859",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "9c67ba3b-d278-4875-9969-45772e5d5bba",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Some schemas/formats such as MPEG media files are standardised and well described and are typed by the MIME type registry, others such as netCDF, for example, are well described in open web-pages maintained by large organisations.\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.\n+ Examples for well specified data formats are all meedia formats: mp4, wav, jpg, mpeg, etc. (https://en.wikipedia.org/wiki/Moving_Picture_Experts_Group)\n+ As examples for well-specified metadata we can refer to CMDI (https://www.clarin.eu/content/component-metadata) and DDI (http://www.ddialliance.org/community/join).\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "3d82a878-3ec9-49c1-8b79-1383c3f1daa5",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Primarily metadata is crucial to understand how th sequence of bits stored, is structured and what it is encoding. However, there are many other kinds of metadata such as assertions about deep scientific matters, access permissions and more. \nPlease, fill in a number of questions about metadata."
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "32d5ad6e-dbe6-4217-a16c-5ee8f5974c0e",
            "parentUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "entityUuid" : "9c67ba3b-d278-4875-9969-45772e5d5bba",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Some schemas/formats such as MPEG media files are standardised and well described and are typed by the MIME type registry, others such as netCDF, for example, are well described in open web-pages maintained by large organisations.\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.\n+ Examples for well specified data formats are all meedia formats: mp4, wav, jpg, mpeg, etc. (https://en.wikipedia.org/wiki/Moving_Picture_Experts_Group)\n\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d757715e-d83f-4b75-bcf8-e5aa6a4318ed",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "a62e82ca-8c17-4e06-8284-eefbe7876219",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Most people still use home-made excel sheets or databases to cover metadata, others use XML schema based files the schemas of which are defined within the community, etc. Increasingly often these schemas are broadly agreed in a community. Please, provide the kind of metadata that are used in the repository, if available refer to a schema and indicate its community relevance.\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation; \n- R1.3 applies: (meta)data meat domain-relevant community standards\n+ As examples for well-specified metadata schemas we can refer to CMDI (https://www.clarin.eu/content/component-metadata) and DDI (http://www.ddialliance.org/community/join)."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ae00def4-9a8b-4f39-b5ef-99a28311d98c",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "05ee37f8-a66e-4f0d-85b5-4d0a2bf68df1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Are the semantic concepts used in the mentioned metadata schemas well-defined and openly registered so that others can point to them and/or reuse them for example for semantic mapping. If so, please, point to the location where the vocabularies and categories are being defined. \n- I2 applies: (meta)data use vocabularies that follow FAIR principles\n+ As examples for well-specified metadata schemas including the vocabularies used we can again refer to CMDI (https://www.clarin.eu/content/component-metadata) and DDI (http://www.ddialliance.org/community/join)."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "bbf315bc-f9a1-455a-ac23-d3d85a53fd31",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "a62e82ca-8c17-4e06-8284-eefbe7876219", 
                    "05ee37f8-a66e-4f0d-85b5-4d0a2bf68df1", 
                    "3b66a563-29da-43a7-9719-115ded25d557", 
                    "a2b74356-444d-4522-8c08-bf772bc315a0", 
                    "e691ed3c-7331-44eb-94b8-d4d5c4554376", 
                    "be533faa-6729-4b2b-9b18-2eb2466eaf24", 
                    "4eb99e26-1f0b-4d8e-97d8-92908d18ceae", 
                    "2a22afb6-7133-468e-9b74-1cd0673d1e07", 
                    "8171a0da-92da-4d77-be20-50e392560046", 
                    "6300bde5-8159-4734-b9a3-870cf86b2ab9", 
                    "280da555-de60-49e9-b3ba-398024b90528"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "503be843-8c70-4c18-9dd4-c73bb3a2afb8",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "a62e82ca-8c17-4e06-8284-eefbe7876219",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Most people still use home-made excel sheets or databases to cover metadata, others use XML schema based files the schemas of which are defined within the community, etc. Increasingly often these schemas are broadly agreed in a community. Please, provide the kind of metadata that are used in the repository, if available refer to a schema and indicate its community relevance.\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation; \n- R1.3 applies: (meta)data meat domain-relevant community standards\n+ As examples for well-specified metadata schemas we can refer to CMDI (https://www.clarin.eu/content/component-metadata) and DDI (http://www.ddialliance.org/community/join).\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0c86d08d-78f7-4e00-9782-eaa78142b547",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "05ee37f8-a66e-4f0d-85b5-4d0a2bf68df1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Are the semantic concepts used in the mentioned metadata schemas well-defined and openly registered so that others can point to them and/or reuse them for example for semantic mapping. If so, please, point to the location where the vocabularies and categories are being defined. \n- I2 applies: (meta)data use vocabularies that follow FAIR principles\n+ As examples for well-specified metadata schemas including the vocabularies used we can again refer to CMDI (https://www.clarin.eu/content/component-metadata) and DDI (http://www.ddialliance.org/community/join).\n+ As examples for more generic vocabularies we can refer to: ISO 19115, ISO 19139, ISO 639, EML2.0, etc."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fd5fc189-8828-4afe-9f1a-15fe1f3997f2",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "a62e82ca-8c17-4e06-8284-eefbe7876219",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Most people still use home-made excel sheets or databases to cover metadata, others use XML schema based files the schemas of which are defined within the community, etc. Increasingly often these schemas are broadly agreed in a community. Please, provide the kind of metadata that are used in the repository, if available refer to a schema and indicate its community relevance.\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation; \n- R1.3 applies: (meta)data meat domain-relevant community standards\n+ As examples for well-specified metadata schemas we can refer to CMDI (https://www.clarin.eu/content/component-metadata) and DDI (http://www.ddialliance.org/community/join).\n+ As xamples for more broader used schemas we can refer to: INSPIRE EF, SensorML, Netcdf, etc."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "78d5a43a-7dd8-4d15-a409-0ace31209a10",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "3b66a563-29da-43a7-9719-115ded25d557",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Most metadata schemas use some categories describing provenance without using standard categories, others may use separate W3C PROV categories included in separate provenance descriptions. There are different ways how to include provenance and which categories are being used. Please, indicate how provenance is included and whether a standard vocabulary is being used.\n- F2 applies: data are described with rich metadata; \n- R1.2 applies: (meta)data are associated with detailed provenance\n+ As an example for typical provenance vocabulary we can refer to W3C PROV."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "db1368aa-0328-40ee-9c0e-9aea3f643dc7",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "05ee37f8-a66e-4f0d-85b5-4d0a2bf68df1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Are the semantic concepts used in the mentioned metadata schemas well-defined and openly registered so that others can point to them and/or reuse them for example for semantic mapping. If so, please, point to the location where the vocabularies and categories are being defined. \n- I2 applies: (meta)data use vocabularies that follow FAIR principles\n+ As examples for well-specified metadata schemas including the vocabularies used we can again refer to CMDI (https://www.clarin.eu/content/component-metadata) and DDI (http://www.ddialliance.org/community/join).\n+ As examples for more generic vocabularies we can refer to: ISO 19115, ISO 19139, ISO 639, EML2.0, DCAT, etc."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "7f2f7cb4-112e-4aaf-b39f-d57d013cb12d",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "a2b74356-444d-4522-8c08-bf772bc315a0",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "If PIDs are assigned by repositories, they should be findable in the metadata decription in a clearly defined metadata attribute. Please, indicate whether PIDs are included in the metadata and if so which attribute is used.\n- I3: (Meta)data include qualified references to other meta(data); \n- F3: Metadata clearly and explicitly include the identifier of the data they describe\n+ As an example we can refer to CMDI again which has a dedicated field as can be seen in this concrete example: https://archive.mpi.nl/islandora/object/lat%3A1839_00_0000_0000_0005_7928_A "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9cb26597-1b76-4059-8682-8ff23bd26ca3",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "e691ed3c-7331-44eb-94b8-d4d5c4554376",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Most often people still use spreadsheets and relational databases to store metadata, others use XML files or RDF stores. Many other possibilities can be thought of. Please indicate what the primary sotragee format of metadata is.\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation\n+ Typical examples of storage formats are: XLS, relational DB such as mySQL, XML files, XML DB, Mungo DB, etc."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ed57cad0-3927-4e5f-9ea4-75ae7efae5e7",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "be533faa-6729-4b2b-9b18-2eb2466eaf24",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Metadata is being transformed and exported in various formats to support harvesting and re-using them for various purposes such as building large search indexes. \n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation\n+ Typical examples of export formats are:  HTML, XML, JSON and RDF. "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "773f0040-26cf-43a3-8dc2-600364574b29",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "4eb99e26-1f0b-4d8e-97d8-92908d18ceae",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Many repositories offer their own metadata search engine covering their collections. Please, indicate whether this is true and give a URL if possible.\n- F4 applies: (meta)data are registered or indexed in a searchable resource\n+ There are many examples, in fact most repositories offer at least a simple search function.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0544dcba-3201-407c-887e-3ea1ac8e7754",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "2a22afb6-7133-468e-9b74-1cd0673d1e07",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Repositories, in general, offer their metadata to be harvested using a specific method. Often repositories simply exchange XML files, many use OAI-PMH including offering DC conversions, others may already make use of ResourceSync. Please, specify which method is used by the repositories.\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation\n+ Typical examples for metadata harvesting methods are: OAI-PMH, just XML-files, ResourceSync, RDF triples.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1fb64f44-8e20-45ab-88ff-ae12ba49eebe",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "8171a0da-92da-4d77-be20-50e392560046",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Many repositories offer their metadata to specific community-based  search engines. In the case of using OAI-PMH, any service provider can of course harvest the metadata records. But the metadata may be provided on purpose to a domain search engine. If so, please, indicate a few major ones and if possible add URLs.\n- F4 applies: (meta)data are registered or indexed in a searchable resource\n+ One such example is for examplee the Virtual Language Observatory harvesting and indexing metadata about all possible language resources worldwide (https://www.clarin.eu/content/virtual-language-observatory-vlo). There are many other excellent examples.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0301668f-8141-471e-85ca-ee065c0ab7e7",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "280da555-de60-49e9-b3ba-398024b90528",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Do you believe that the metadata managed by the repository can be processed by machines?  This requires, for example, that  license and other information is encoded in a formal laguage. Please, indicated whether metadata is machine actionable and if not why not.\n- I1: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation; \n- R1.1. (Meta)data are released with a clear and accessible data usage license\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "138a7d47-c40e-46e9-8896-7f5b32e3fd8e",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "07b5682f-8029-49db-9649-8c4e37eb57ef",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "A number of different techniques are being used to do authentication in distributeed scenarios when users want to access data. Please, describe the methods of authentication which are supported by the repository. \n- A1.2 applies: The protocol allows for an authentication and authorisation where necessary\n+ A large variety of solutions and combinations are being used such as Shibboleth in combination with eduGain, OAuth component is being included by some, others make use of a domain specific user base such as Marine ID, etc.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "5353b3a8-603a-4806-bcf0-a1740468f033",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "d8cd22b1-fef5-48d5-b15b-fea2bf767393",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "There are a large number of different access technologies being used by repositories. Please, indicate the major components that are involved and indicate whether the protocols are open, free and universally implementable.\n- A1.1: The protocol is open, free and universally implementable.\n+ A variety of components and protocols are being used. We can here just mention a few components that are often be used: OpenID, LDAP, SAML, Shibboleth/SAML2, eduGain, etc.\n\n\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "ba4e9189-e2e4-467c-b690-cbfd64010cb0",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "07b5682f-8029-49db-9649-8c4e37eb57ef", 
                    "2b459840-4bf3-47cf-8115-560c5490f861", 
                    "b711d8fb-58c9-4b39-8d91-fe0762ad0aed", 
                    "d8cd22b1-fef5-48d5-b15b-fea2bf767393", 
                    "2430cd22-cdda-497e-b1bb-c76ad3eecc67", 
                    "2652c066-8c47-4933-a26e-0cba7220b0b9", 
                    "e0b7b7b1-fb29-434c-99e8-92b04caa79da"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "19c4d205-37ec-444c-affe-e686706dd7e0",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "07b5682f-8029-49db-9649-8c4e37eb57ef",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "A number of different techniques are being used to do authentication in distributeed scenarios when users want to access data. Please, describe the methods of authentication which are supported by the repository. \n- A1.2 applies: The protocol allows for an authentication and authorisation where necessary\n+ A large variety of solutions and combinations are being used such as multiple IdP, local user DB, service provider federations such as in the cas of CLARIN which is connected to 21 national identity federations: https://www.clarin.eu/content/service-provider-federation \n\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fe75ea73-df9d-41a7-b51b-cb2baf976e54",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "2430cd22-cdda-497e-b1bb-c76ad3eecc67",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Authorisation in distributed scenarios is currently not well supported. Please, indicate the process and the major components involved in authorisation. \n- A1.2: The protocol allows for an authentication and authorisation where necessary\n+ Authorisation in general is dealt with locally using locally stored Access Control Lists associated with files etc. Database systems have their own embedded mechanisms. Cloud stores associate access information with the local ID all stored in a fast database."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4dec96ab-58c8-4084-aefa-cc446e779253",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "2652c066-8c47-4933-a26e-0cba7220b0b9",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Does the repository use specific licenses types for data.  Creative Common licenses or similar start to become more popular currently. Please, specify which kinds of licences are used. In case the use of a Code of Conduct specify a URL.\n- R1.1. (Meta)data are released with a clear and accessible data usage license\n+ Examples of generic types of licences are: Code of Conduct, local license, CC BY 4.0, Creative Commons Attribution 3.0, CCBY, etc. For software th well-known GNU licences are wideely used examples.\n+ An example for a Code of Conduct can b found here: http://dobes.mpi.nl/ethical_legal_aspects/DOBES-coc-v2.pdf\n\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "adbccb30-31a2-462c-9c96-33a206356c2e",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "e0b7b7b1-fb29-434c-99e8-92b04caa79da",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please, specify whether the metadata being managed is openly accessible via some access mechanism.\n- R1.1 applies: (Meta)data are released with a clear and accessible data usage license\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fc63791f-f02d-4d12-985a-5257dc2f5186",
            "parentUuid" : "6c4591f5-18cf-452e-a846-47aee9650a61",
            "entityUuid" : "192e8c2f-a8fe-4e01-82a2-1074c3baffa2",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please, indicate which DMP tool are you using or advocating in your community.\n+ Examples to come."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6921e158-5cda-4b4f-b204-d806b340dd11",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "2652c066-8c47-4933-a26e-0cba7220b0b9",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Does the repository use specific licenses types for data.  Creative Common licenses or similar start to become more popular currently. Please, specify which kinds of licences are used prefered with a reference. In case the use of a Code of Conduct specify a URL.\n- R1.1. (Meta)data are released with a clear and accessible data usage license\n+ Examples of generic types of licences are: Code of Conduct, local license, CC BY 4.0, Creative Commons Attribution 3.0, CCBY, etc. For software th well-known GNU licences are wideely used examples.\n+ An example for a Code of Conduct can b found here: http://dobes.mpi.nl/ethical_legal_aspects/DOBES-coc-v2.pdf\n\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "027ce8b8-a95c-4c94-8e45-7f92820319aa",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Supporting semantic cross-walks is getting increasingly important. Therefore, we include three questions about vocabularies, ontologies etc. that might be used to create your metadata and data. We differentiate between generic, discipline-specific and project-defined vocabularies and ontologies.\nDue the vast number of solutions we will not give examples."
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "e0c5c883-d2e6-4ba3-923c-e1ab13add9f8",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "cdc735e2-4de4-4aad-99f9-0b2ea4a65266",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Metadata and data are often including generic vocabularies, ontologies etc. such as, for example, geographic names or language names. Please, indicate which ones you are using mainly and add URLs.\n\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation, \n- I2 applies: (meta)data use vocabularies that follow FAIR principles, \n- R1 applies: (Meta)data are richly described with a plurality of accurate and relevant attributes\n\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a51a6897-4bd3-4eda-be12-5554db1989f6",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "d05b612f-640d-4d50-9829-2fcff208d0f1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Metadata and data are often including discipline-specific vocabularies, ontologies etc.  Please, indicate which ones you are using mainly and add URLs.\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation, \n- I2 applies: (meta)data use vocabularies that follow FAIR principles, \n- R1 applies: (Meta)data are richly described with a plurality of accurate and relevant attributes\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fbf4f918-4f7d-4ed0-8e89-9bcb6e540573",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "46baaa46-da2d-4112-b005-b75af045195a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Metadata and data are often including project-specific vocabularies, ontologies etc. Please, indicate which ones you are using mainly and add URLs.\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation, \n- I2 applies: (meta)data use vocabularies that follow FAIR principles, \n- R1 applies: (Meta)data are richly described with a plurality of accurate and relevant attributes\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "dd3b3c79-1dba-4834-a31d-2b40a45ce07c",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "This survey is run by RDA GEDE and GOFAIR to assess the set of technologies being used in the various research institutes, departments and projects. We expect substantial contributions from this survey to the work in RDA, GOFAIR, the ESFRI ERICs/projects, CODATA, etc. and it will help shaping the EOSC, etc. We also expect a continuous stream of input from an increasing number of participants and by participants updating their answers. We will regularly  generate snapshots of the database, analysing them by automatic means and published the summary results. \nWho should fill in this survey? We assume that the persons participating in this survey are responsible for managing and curating a sizable collection of data in your organisation or initiative. In general, the participant should be member of a team responsible for running a repository, be it a small or big one.\n\nIn the explanations of the questions we indicate the FAIR principles that are related with the \"-\" sign. We will offer where applicable also possible values indicated with a \"+\" sign.\n\nIn case of questions, please, don't hesitate to contact Zsuzsanna Szeredi (zsuzsanna.szeredi@gmail.com). "
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a207af8d-e8af-4f3a-910c-940de1c8972c",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "91d90ad4-4aa3-4536-8c25-66bd14893fa6",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please, indicate the research domain you are working in. "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "3127b511-c03d-4bd7-9a29-934b9a5274f4",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "bfe229e5-4e8d-428f-a788-d0f5b42d5b82", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "c3b7a244-b78f-4aa3-987c-89c221feec69", 
                    "90ce1956-5538-466b-837a-0951d3c578fb"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0672ee55-3742-477b-ac35-881dd177f080",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "91d90ad4-4aa3-4536-8c25-66bd14893fa6",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please, indicate the research domain your infrastructure/repository/institute is mainly working in. "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "19b794f6-5ddc-430c-a5e4-82665ee72595",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c3b7a244-b78f-4aa3-987c-89c221feec69",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please, indicate with a few keywords your role in the initiative and your background. We would like to understand whether you are for example a data scientist, a data manager, etc. and whether you have an IT, library, research, etc. background."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "3d2412b2-b21a-4473-83a2-2841e004b60d",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "9069a99b-2946-46e3-b670-087984dfebd3",
            "title" : "Data Set",
            "text" : "Please, provide if possible a PID to one of the data sets you created, manage or curate.",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "92bd4c6c-d203-42db-9796-9673a1d6b27e",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "60d11929-36bc-4d4d-b1f6-300edee9847b",
            "title" : "Discovery Portal",
            "text" : "In case there is a discovery portal where your specified data set can be found, please give a url.",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "3d8fd1ec-6e92-4849-ab00-539914d5610e",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "5b8e55c1-fb7b-4e11-ba20-9163e9b2821c",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "In the case that you are a researcher heavily creating data and depositing it in a repository, please, indicate the repositories you are using and which you will subsequently describe. If you are a repository manager describe your repository. Local as well domain or central repositories are in use, often these are just local servers with discs that are managed by a data manager. Please, also specify a PID that points to that repository.\n- F4 applies: (Meta)data are registered or indexed in a searchable resource.\n+ Examples for repositories are: local (can be many), domain (can be many), generic (B2SAFE, B2SHARE, B2DROP, ZENODO, GITHUB, Dropbox, FIGSHARE, etc.)"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f5645abd-63c5-471f-acdd-fbd742e12375",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "da26d412-260f-4eda-bc03-83feb0c8a920",
            "title" : "Type of Repository",
            "text" : "Please, indicate the type and scope of that repository.\n+ Type: metadata, data, instruments, vocabularies, software, instruments\n+ Scope: local, domain, generic",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "32199a3c-fb00-4d07-b60c-6d0bb963591f",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "5b8e55c1-fb7b-4e11-ba20-9163e9b2821c", 
                    "88070d42-d5ff-414d-9d8b-4e06a8798b47", 
                    "da26d412-260f-4eda-bc03-83feb0c8a920", 
                    "f8f37f16-ca5d-4a6c-b788-59a2f11efb35", 
                    "6e51e1c8-a8e2-4c08-931e-f790ecbe3e3e", 
                    "612a9767-0eae-4ae6-80b7-ae7f4618fce7", 
                    "62df9ba9-fa8a-42d5-aae6-b527e03fbde2", 
                    "fe58b893-3e18-421d-a25d-386dd48e543a", 
                    "1fb1550c-d6dd-4ceb-bedd-3703063cf9a8", 
                    "43381ac8-04e5-4d3d-a377-518775814795", 
                    "6a60948a-545f-4c51-8562-6d197a7a79b7", 
                    "d39122f7-c38a-4df8-b1f3-affce38431bb", 
                    "ac27032b-5ff8-4b21-9a8b-bbe34950dcfd"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "021645dc-c664-476f-9d4b-3f2a6d79ef93",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "6e51e1c8-a8e2-4c08-931e-f790ecbe3e3e",
            "title" : {
                "changed" : true,
                "value" : "Do your repositories use local PIDs? If so which IDs?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "058ba1d3-8c21-475f-b4f1-4667f0162756",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "5b8e55c1-fb7b-4e11-ba20-9163e9b2821c", 
                    "88070d42-d5ff-414d-9d8b-4e06a8798b47", 
                    "da26d412-260f-4eda-bc03-83feb0c8a920", 
                    "f8f37f16-ca5d-4a6c-b788-59a2f11efb35", 
                    "6e51e1c8-a8e2-4c08-931e-f790ecbe3e3e", 
                    "612a9767-0eae-4ae6-80b7-ae7f4618fce7", 
                    "1fb1550c-d6dd-4ceb-bedd-3703063cf9a8", 
                    "62df9ba9-fa8a-42d5-aae6-b527e03fbde2", 
                    "fe58b893-3e18-421d-a25d-386dd48e543a", 
                    "43381ac8-04e5-4d3d-a377-518775814795", 
                    "6a60948a-545f-4c51-8562-6d197a7a79b7", 
                    "d39122f7-c38a-4df8-b1f3-affce38431bb", 
                    "ac27032b-5ff8-4b21-9a8b-bbe34950dcfd"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ff4706b8-6248-46c0-9214-d53a66070872",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "1fb1550c-d6dd-4ceb-bedd-3703063cf9a8",
            "title" : {
                "changed" : true,
                "value" : "Is the PID Record used to store properties of the data or to refer to different types of metadata?? "
            },
            "text" : {
                "changed" : true,
                "value" : "Increasingly often repositories use the PID record to store properties of the data and to refer to other information such as descriptive or system metadata. Please, indicate whether the PID record is used for such purposes and which kind of response (landing page, attribute set) is generated.\n- F2 applies: Data are described with rich metadata\n+ The RDA Kernel Information group collected a number of useful attributes such as checksum, path to access the bit sequence, type of the bit sequence, path to the metadata, PID of previous version, etc.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "be85dc71-85f9-40db-b8c2-fabd5d128600",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "1fb1550c-d6dd-4ceb-bedd-3703063cf9a8",
            "title" : {
                "changed" : true,
                "value" : "Is the PID Record used to store properties of the data or to refer to different types of metadata? "
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "0ea0e182-e4b7-4483-8255-90e2ecc113f1",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "5b8e55c1-fb7b-4e11-ba20-9163e9b2821c", 
                    "f8f37f16-ca5d-4a6c-b788-59a2f11efb35", 
                    "88070d42-d5ff-414d-9d8b-4e06a8798b47", 
                    "da26d412-260f-4eda-bc03-83feb0c8a920", 
                    "6e51e1c8-a8e2-4c08-931e-f790ecbe3e3e", 
                    "612a9767-0eae-4ae6-80b7-ae7f4618fce7", 
                    "1fb1550c-d6dd-4ceb-bedd-3703063cf9a8", 
                    "62df9ba9-fa8a-42d5-aae6-b527e03fbde2", 
                    "fe58b893-3e18-421d-a25d-386dd48e543a", 
                    "43381ac8-04e5-4d3d-a377-518775814795", 
                    "6a60948a-545f-4c51-8562-6d197a7a79b7", 
                    "d39122f7-c38a-4df8-b1f3-affce38431bb", 
                    "ac27032b-5ff8-4b21-9a8b-bbe34950dcfd"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1e72faa0-509d-4fcc-9e50-5eefac961f71",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "1fb1550c-d6dd-4ceb-bedd-3703063cf9a8",
            "title" : {
                "changed" : true,
                "value" : "Is the PID Record used to store properties of the data and what is the response type? "
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "94454804-7ff5-43fb-bbbc-7d3e05bc1194",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "5b8e55c1-fb7b-4e11-ba20-9163e9b2821c", 
                    "88070d42-d5ff-414d-9d8b-4e06a8798b47", 
                    "da26d412-260f-4eda-bc03-83feb0c8a920", 
                    "f8f37f16-ca5d-4a6c-b788-59a2f11efb35", 
                    "6e51e1c8-a8e2-4c08-931e-f790ecbe3e3e", 
                    "612a9767-0eae-4ae6-80b7-ae7f4618fce7", 
                    "1fb1550c-d6dd-4ceb-bedd-3703063cf9a8", 
                    "62df9ba9-fa8a-42d5-aae6-b527e03fbde2", 
                    "fe58b893-3e18-421d-a25d-386dd48e543a", 
                    "43381ac8-04e5-4d3d-a377-518775814795", 
                    "6a60948a-545f-4c51-8562-6d197a7a79b7", 
                    "d39122f7-c38a-4df8-b1f3-affce38431bb", 
                    "ac27032b-5ff8-4b21-9a8b-bbe34950dcfd"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "95e3a5cb-fa5c-4e02-9b5f-9808e429ebe6",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "1fb1550c-d6dd-4ceb-bedd-3703063cf9a8",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Increasingly often repositories use the PID record to store properties of the data and to refer to other information such as descriptive or system metadata. Please, indicate whether the PID record is used for such purposes and which kind of response (landing page, attribute set) is generated.\n- F2 applies: Data are described with rich metadata\n+ The RDA Kernel Information group collected a number of useful attributes such as checksum, path to access the bit sequence, type of the bit sequence, path to the metadata, PID of previous version, etc.\n+ Typical response types: html landing page, attribute set, etc.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bb96ff03-6469-4820-af12-811aad7e9a3f",
            "parentUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674",
            "entityUuid" : "ac27032b-5ff8-4b21-9a8b-bbe34950dcfd",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "The garanties for long-term persistency are varying between repositories as well as their methods to make data safe. Please, add an indication about guarantees and methods to create redundant copiees etc.\n-  A1 applies: (meta)data are retrievable by their identifier using a standardized communication protocol; \n- A2 applies: metadata are accessible, even when the data are no longer available\n+ A well known example is that many repositories give guarantees of 10 years, since this is the period one needs to manage data to allow checks.\n+ Often repositories do not give guarantees for more than 2 or 3 years which is their secured funding.\n+ In general commercial repositories can't give guarantees, since their business can fail."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditKnowledgeModelEvent",
            "uuid" : "96220474-dd90-45c0-acab-ffb7f3c01a62",
            "parentUuid" : "00000000-0000-0000-0000-000000000000",
            "entityUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "name" : {
                "changed" : false
            },
            "chapterUuids" : {
                "changed" : true,
                "value" : [ 
                    "0d6d8772-7604-4835-9fe1-735ff9eb63fa", 
                    "63eecafc-fdda-47d3-92d2-d58fad54588d", 
                    "90fe5b17-e1c9-4725-8cd4-935cae310674", 
                    "4ada753c-82b9-4fbd-91f6-59700ea06e26", 
                    "26f61108-4b1e-458a-8005-47cb7f2e2544", 
                    "b6e98a35-1830-48bb-9784-0382f16e4218", 
                    "6c4591f5-18cf-452e-a846-47aee9650a61", 
                    "b6cecb73-9326-4049-9eda-bc3cc62267e8", 
                    "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1", 
                    "b054bc78-b560-4dd9-a3c8-4f379195193b"
                ]
            },
            "tagUuids" : {
                "changed" : false
            },
            "integrationUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a0115f1f-16bf-4d6b-81b5-1d71a72405d6",
            "parentUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "entityUuid" : "aa563525-447a-47d4-9780-80be44bd950c",
            "title" : "Access Protocol",
            "text" : "Please, describe the access protocol if applicable including a URL and indicate whether it is open.\n- A1.1 applies: Is the protocol (royalty) free?",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "19c09efe-b208-4d0e-b36e-c489dae9daed",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "07b5682f-8029-49db-9649-8c4e37eb57ef", 
                    "2b459840-4bf3-47cf-8115-560c5490f861", 
                    "b711d8fb-58c9-4b39-8d91-fe0762ad0aed", 
                    "d8cd22b1-fef5-48d5-b15b-fea2bf767393", 
                    "aa563525-447a-47d4-9780-80be44bd950c", 
                    "2430cd22-cdda-497e-b1bb-c76ad3eecc67", 
                    "2652c066-8c47-4933-a26e-0cba7220b0b9", 
                    "e0b7b7b1-fb29-434c-99e8-92b04caa79da"
                ]
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "908fa50d-0882-4325-a3d3-228b7d0fbdaa",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "50e9a7d3-8085-4613-8251-3356bff35cc7", 
                    "a33667be-d254-43f7-8f00-def7ce792f2d", 
                    "830e2cae-d5ef-4b9b-9d8f-e4616d8cc776", 
                    "9c67ba3b-d278-4875-9969-45772e5d5bba", 
                    "eba8315f-6135-427c-8380-641d2282c7ff"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bc969512-37ea-40b2-963f-7c816b590c44",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "3b66a563-29da-43a7-9719-115ded25d557",
            "title" : {
                "changed" : true,
                "value" : "How is provenance included and is a standard vocabulary being used?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "e06c4e86-9baa-4964-8915-d0e4ca73bfce",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "2a22afb6-7133-468e-9b74-1cd0673d1e07",
            "title" : {
                "changed" : true,
                "value" : "Which metadata exchange/harvesting methods are supported? Which port is used?"
            },
            "text" : {
                "changed" : true,
                "value" : "Repositories, in general, offer their metadata to be harvested using a specific method. Often repositories simply exchange XML files, many use OAI-PMH including offering DC conversions, others may already make use of ResourceSync. Please, specify which method is used by the repositories and if applicable idntify the port for harvesting.\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation\n+ Typical examples for metadata harvesting methods are: OAI-PMH, just XML-files, ResourceSync, RDF triples.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a4b5281d-3ef2-4a8b-a3cd-589227b4792d",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "936ef557-9864-47fb-8f45-832dc9f3f6ab",
            "title" : "Metadata Longivity",
            "text" : "Is there a logivity plan for the metadata. If applicable, offer a URL where the plan is being explained.\n",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "9e34d80c-f0ba-403b-bd31-b09bbc4f5a0b",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "a62e82ca-8c17-4e06-8284-eefbe7876219", 
                    "05ee37f8-a66e-4f0d-85b5-4d0a2bf68df1", 
                    "3b66a563-29da-43a7-9719-115ded25d557", 
                    "a2b74356-444d-4522-8c08-bf772bc315a0", 
                    "e691ed3c-7331-44eb-94b8-d4d5c4554376", 
                    "be533faa-6729-4b2b-9b18-2eb2466eaf24", 
                    "4eb99e26-1f0b-4d8e-97d8-92908d18ceae", 
                    "2a22afb6-7133-468e-9b74-1cd0673d1e07", 
                    "8171a0da-92da-4d77-be20-50e392560046", 
                    "6300bde5-8159-4734-b9a3-870cf86b2ab9", 
                    "280da555-de60-49e9-b3ba-398024b90528", 
                    "936ef557-9864-47fb-8f45-832dc9f3f6ab"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b6b935aa-9223-4cae-afd3-381fbd157a66",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "936ef557-9864-47fb-8f45-832dc9f3f6ab",
            "title" : {
                "changed" : true,
                "value" : "Is there a Metadata Longivity Plan?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a51e018b-0ee4-4d3a-bcc8-f2a00ccf2187",
            "parentUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218",
            "entityUuid" : "97dd47f4-3a71-4b37-970f-eab79ee137dc",
            "title" : "Is there a machine-actionable metadata instance you can refer to?",
            "text" : "If applicable, point (PID) to a metadata description record that includes machine-actionable metadata.",
            "requiredLevel" : 1,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "EditKnowledgeModelEvent",
            "uuid" : "be6939fb-1e93-4a7c-ba69-26cb75409e9b",
            "parentUuid" : "00000000-0000-0000-0000-000000000000",
            "entityUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "name" : {
                "changed" : false
            },
            "chapterUuids" : {
                "changed" : true,
                "value" : [ 
                    "0d6d8772-7604-4835-9fe1-735ff9eb63fa", 
                    "63eecafc-fdda-47d3-92d2-d58fad54588d", 
                    "90fe5b17-e1c9-4725-8cd4-935cae310674", 
                    "4ada753c-82b9-4fbd-91f6-59700ea06e26", 
                    "26f61108-4b1e-458a-8005-47cb7f2e2544", 
                    "b6e98a35-1830-48bb-9784-0382f16e4218", 
                    "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1", 
                    "6c4591f5-18cf-452e-a846-47aee9650a61", 
                    "b6cecb73-9326-4049-9eda-bc3cc62267e8", 
                    "b054bc78-b560-4dd9-a3c8-4f379195193b"
                ]
            },
            "tagUuids" : {
                "changed" : false
            },
            "integrationUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "3a4212fb-ba09-4663-8567-8d1f02c1083e",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "cdc735e2-4de4-4aad-99f9-0b2ea4a65266"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "818f1356-2300-4a6b-9378-dbf4def32619",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "d05b612f-640d-4d50-9829-2fcff208d0f1"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "3139c490-631c-4233-a0c4-ecb0cbe69143",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Supporting semantic cross-walks is getting increasingly important. Therefore, we include questions about vocabularies, ontologies etc. that might be used to create your metadata and data. One could differentiate between generic, discipline-specific and project-defined vocabularies and ontologies.\nDue the vast number of solutions we will not give examples."
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1adaaf8b-64e8-494f-89df-47a02650ddd3",
            "parentUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1",
            "entityUuid" : "46baaa46-da2d-4112-b005-b75af045195a",
            "title" : {
                "changed" : true,
                "value" : "Which Semantic Vocabularies are being used?"
            },
            "text" : {
                "changed" : true,
                "value" : "Metadata and data are based on vocabularies, ontologies etc. These can be local, discipline-specific or generic. Please, indicate which ones you are using mainly and add URLs. For eeach vocabulary you describe, please, add name, URL, type (taxonomy, thesaurus, etc.), vocabulary topic, vocabulary language)\n- I1 applies: (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation, \n- I2 applies: (meta)data use vocabularies that follow FAIR principles, \n- R1 applies: (Meta)data are richly described with a plurality of accurate and relevant attributes\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1f444982-09cd-475b-b95d-eeda6f9f9f7b",
            "parentUuid" : "6c4591f5-18cf-452e-a846-47aee9650a61",
            "entityUuid" : "ea780166-c42f-4685-86af-9d9538ed5247",
            "title" : "Do you use a community compliance validator?",
            "text" : "In some cases people are using community compliance validator services. If applicable, please provide a nam and URL.\n- R1.3 related: (meta)data meet domain-relevant community standards.",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "06b89d81-2f4a-4fe2-8f65-9630bde6ee39",
            "parentUuid" : "6c4591f5-18cf-452e-a846-47aee9650a61",
            "entityUuid" : "ea780166-c42f-4685-86af-9d9538ed5247",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : true,
                "value" : 1
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : true,
                "value" : "TextQuestionValueType"
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6ec66c99-81fc-4e6e-84b6-3b1400c3a856",
            "parentUuid" : "b6cecb73-9326-4049-9eda-bc3cc62267e8",
            "entityUuid" : "1dbbf181-260b-48f5-b937-bb10cdb37bc1",
            "title" : {
                "changed" : true,
                "value" : "Do you apply workflow frameworks for processing your data?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "33a140c7-f5e6-4390-92c6-543938d877a5",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c3b7a244-b78f-4aa3-987c-89c221feec69"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f7bd738c-c01e-44ea-b294-d411227f9426",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "bfe229e5-4e8d-428f-a788-d0f5b42d5b82",
            "title" : {
                "changed" : true,
                "value" : "Name of Community"
            },
            "text" : {
                "changed" : true,
                "value" : null
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "8b5ee075-e469-4be1-84aa-def881370dd9",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "9069a99b-2946-46e3-b670-087984dfebd3"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "aa0b052e-373f-45ab-a29c-ae7e5fb2517a",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "bfe229e5-4e8d-428f-a788-d0f5b42d5b82", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "90ce1956-5538-466b-837a-0951d3c578fb", 
                    "60d11929-36bc-4d4d-b1f6-300edee9847b"
                ]
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "486f9394-bc89-4f4e-9d09-5aa67a619230",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "60d11929-36bc-4d4d-b1f6-300edee9847b"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "69bd2895-9d25-4815-8a7c-61f636327812",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "91d90ad4-4aa3-4536-8c25-66bd14893fa6",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditKnowledgeModelEvent",
            "uuid" : "b9f675dd-84fd-4db3-9940-4217e229763e",
            "parentUuid" : "00000000-0000-0000-0000-000000000000",
            "entityUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "name" : {
                "changed" : true,
                "value" : "FIP Survey"
            },
            "chapterUuids" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "integrationUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "dd3f74cb-bbc7-4ea4-a7f7-c02cc7efac55",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "title" : "Findability",
            "text" : "Chapter text"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "9f654c28-8359-436e-a711-3d452399d7e9",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "5aa3c6d4-33cf-4787-bc5c-5c442dd09b9c",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "title" : {
                "changed" : true,
                "value" : "Findability - Metadata - Generic"
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "6d109036-aae5-4774-ab3b-e06a13d4544a",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "title" : {
                "changed" : true,
                "value" : "What globally unique, persistent, resolvable identifiers do you use?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddReferenceEvent",
            "referenceType" : "URLReference",
            "uuid" : "2a465de6-3f99-4f3d-ab79-81d24a37df1c",
            "parentUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "entityUuid" : "2b61843b-622f-49ea-9c0a-a4f0004158dc",
            "url" : "http://example.com",
            "label" : "See also"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "db20cb24-c84d-4b0f-a1c4-c47e81b08976",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0c38b6ea-ecd7-417e-b26b-7a3a7d93202e",
            "parentUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "entityUuid" : "d496ad60-3cf4-462d-9340-66c59f299755",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddReferenceEvent",
            "referenceType" : "URLReference",
            "uuid" : "947cbe29-b3f9-453d-baf7-392574a6bca7",
            "parentUuid" : "91d90ad4-4aa3-4536-8c25-66bd14893fa6",
            "entityUuid" : "63ef32ca-947d-429c-a57d-1efd84ff4466",
            "url" : "http://example.com",
            "label" : "https://github.com/FAIRsharing/domain-ontology/blob/master/releases/0.2.0/DRAO-release-0.2.0.owl"
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "edc02899-d357-4f4d-9070-8777a87e89bc",
            "parentUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "entityUuid" : "e7cb20a1-3896-4e77-85d4-38d80a4c5db1",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "f89c10f7-91d5-49e2-97b3-843e85643e6f",
            "parentUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "entityUuid" : "d496ad60-3cf4-462d-9340-66c59f299755",
            "label" : {
                "changed" : true,
                "value" : "DOI offered by Datacite"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "f3ac9ae7-4b5f-4ba1-911f-ad3050f5e229",
            "parentUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "entityUuid" : "e7cb20a1-3896-4e77-85d4-38d80a4c5db1",
            "label" : {
                "changed" : true,
                "value" : "DOI offered by another organization"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c81b7812-a5fa-4296-abd9-21e7d821858b",
            "parentUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "entityUuid" : "87a208ee-c971-4554-bf29-771bb8b118e8",
            "label" : "general Handles",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3d6dba90-03d0-4349-acab-014a83b0d40b",
            "parentUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "entityUuid" : "b2d599f3-e104-4a6d-b034-3549eea7b11d",
            "label" : "Trusty URI",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "41291952-6415-44a0-ab7c-b41c3b156eda",
            "parentUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "entityUuid" : "dc5d299d-43d4-4f08-b158-71322daa4dcb",
            "label" : "ePIC services",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "99f7499b-b77d-4dee-8300-d50f04c9adaa",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "00b92c11-5c87-4e24-b225-180af07943a6",
            "title" : "Which metadata schema(s) are you using for Findability?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bc8f1c2e-7a9a-4986-bff5-a5db519d504f",
            "parentUuid" : "00b92c11-5c87-4e24-b225-180af07943a6",
            "entityUuid" : "8a9dd525-e42a-4e63-8e9e-9db0aca9bf45",
            "label" : "Dublin Core",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9885d7b5-c3ff-437f-a9c9-07fc3ac84e79",
            "parentUuid" : "00b92c11-5c87-4e24-b225-180af07943a6",
            "entityUuid" : "1090ad30-d296-455c-af97-596803206cb6",
            "label" : "INSPIRE",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "9f00d97a-1f17-4aca-a307-b5fbe1445c75",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "a8dd2bd9-ddbe-46b7-948b-fb6e3af4ea44",
            "title" : "What is the technology that links the persistent identifiers of your data to the metadata description?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8cc334e5-ea2d-40da-b91a-20e1bccb4cc9",
            "parentUuid" : "a8dd2bd9-ddbe-46b7-948b-fb6e3af4ea44",
            "entityUuid" : "1d034332-9f7b-4586-bfcc-c6f79d89f0ee",
            "label" : "FAIR Data Point",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d398354a-866c-4153-8206-df709a4fcb66",
            "parentUuid" : "a8dd2bd9-ddbe-46b7-948b-fb6e3af4ea44",
            "entityUuid" : "db1ec892-5762-4b00-a390-17ebc31a1c84",
            "label" : "Fair Digital Framework",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "da9c218c-6d54-4574-b2fb-9da6e8fbbfc1",
            "parentUuid" : "a8dd2bd9-ddbe-46b7-948b-fb6e3af4ea44",
            "entityUuid" : "72e3ba89-dbdd-4574-bb26-143ddb5a57c8",
            "label" : "PID for data included in metadata",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "832fa27c-daa8-433f-befa-701c9a72c1be",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "6e387833-fa76-47ad-9f20-276aef64c475",
            "title" : "In which searchable resources is your metadata indexed?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f83c5e8d-34f9-41d8-bad1-702a4f8b40a4",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "title" : {
                "changed" : true,
                "value" : "F1 What globally unique, persistent, resolvable identifiers do you use?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e6d88690-d885-46c0-b1f4-dd66f7e208f7",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "00b92c11-5c87-4e24-b225-180af07943a6",
            "title" : {
                "changed" : true,
                "value" : "F2 Which metadata schema(s) are you using for Findability?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a14bdc44-fde5-46d3-9cc1-d63cf2bfc9a4",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "a8dd2bd9-ddbe-46b7-948b-fb6e3af4ea44",
            "title" : {
                "changed" : true,
                "value" : "F3 What is the technology that links the persistent identifiers of your data to the metadata description?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f2985687-5efa-4715-8990-ec405a39dd37",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "6e387833-fa76-47ad-9f20-276aef64c475",
            "title" : {
                "changed" : true,
                "value" : "F4 In which searchable resources is your metadata indexed?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "24a5f19b-859b-4415-a315-8299c31fe1a6",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "6ec73572-f031-4298-841e-e120f3359426",
            "title" : "Findability -Metadata - Specific",
            "text" : "Chapter text"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "064a66c0-ace8-4400-acd4-e047c8453b40",
            "parentUuid" : "6ec73572-f031-4298-841e-e120f3359426",
            "entityUuid" : "3668c504-7e37-4eb8-806a-17fd2a68fa0d",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f50b0b16-a6e3-4c2a-b3b0-0fdf45874384",
            "parentUuid" : "6ec73572-f031-4298-841e-e120f3359426",
            "entityUuid" : "3668c504-7e37-4eb8-806a-17fd2a68fa0d",
            "title" : {
                "changed" : true,
                "value" : "F1 What globally unique, persistent, resolvable identifiers do you use?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e29301c6-c154-4f02-b738-3ef01443392b",
            "parentUuid" : "6ec73572-f031-4298-841e-e120f3359426",
            "entityUuid" : "decc4c95-53f6-44c1-a653-ce86a7ac321f",
            "title" : "F2 Which data schema(s) are you using for Findability?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7c644b75-aac8-4ff9-9bb0-ffb02674ba70",
            "parentUuid" : "6ec73572-f031-4298-841e-e120f3359426",
            "entityUuid" : "6e94698a-10f2-4bac-b368-45434b98f81f",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "13e11b4c-313d-4c50-8272-cae9e4de9254",
            "parentUuid" : "6ec73572-f031-4298-841e-e120f3359426",
            "entityUuid" : "6e94698a-10f2-4bac-b368-45434b98f81f",
            "title" : {
                "changed" : true,
                "value" : "F4 In which searchable resources is your data indexed?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "076b4bd4-afbe-4118-95a3-5d4e53b75da6",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "title" : "Findability",
            "text" : "Chapter text"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "b39224e8-9531-4679-8b98-1a1038fd490f",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "a8dd2bd9-ddbe-46b7-948b-fb6e3af4ea44",
            "targetUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236"
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "18e89daf-059d-476a-91c3-ff08b2480451",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "a83f7938-4b2d-4932-a8d8-ec9ba72c3528",
            "title" : "Findability - Data - Generic",
            "text" : "Chapter text"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "9ce85445-3ce9-4bfc-b0e1-47d7ffd9d100",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "title" : {
                "changed" : true,
                "value" : "F1 What globally unique, persistent, resolvable identifiers do you use for generic metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "41996212-a68a-41cf-9824-82af703fe22b",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "00b92c11-5c87-4e24-b225-180af07943a6",
            "title" : {
                "changed" : true,
                "value" : "F2 Which generic metadata schema(s) are you using for Findability?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "fdd36d47-db82-48b0-bbc0-93feea765557",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "6e387833-fa76-47ad-9f20-276aef64c475",
            "title" : {
                "changed" : true,
                "value" : "F4 In which searchable resources is your generic metadata indexed?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c51c9c91-a8c4-4601-a768-6e2e5f743b8d",
            "parentUuid" : "6ec73572-f031-4298-841e-e120f3359426",
            "entityUuid" : "3668c504-7e37-4eb8-806a-17fd2a68fa0d",
            "title" : {
                "changed" : true,
                "value" : "F1 What globally unique, persistent, resolvable identifiers do you use for your specific metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e53fc53c-f42c-440e-8afa-dbf5c74d384c",
            "parentUuid" : "6ec73572-f031-4298-841e-e120f3359426",
            "entityUuid" : "decc4c95-53f6-44c1-a653-ce86a7ac321f",
            "title" : {
                "changed" : true,
                "value" : "F2 Which specific metadata schema(s) are you using for Findability?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2ec29a25-8430-4f29-9e9b-939882d94c2f",
            "parentUuid" : "6ec73572-f031-4298-841e-e120f3359426",
            "entityUuid" : "6e94698a-10f2-4bac-b368-45434b98f81f",
            "title" : {
                "changed" : true,
                "value" : "F4 In which searchable resources is your specific metadata indexed?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "874e93c8-99c5-40a9-8586-638d237ac3b2",
            "parentUuid" : "a83f7938-4b2d-4932-a8d8-ec9ba72c3528",
            "entityUuid" : "41fe1eca-c262-42b1-8474-33737ee7f75f",
            "title" : "F1 What globally unique, persistent, resolvable identifiers do you use for data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "c1166f65-b2b5-4d22-94df-bafbcc8204a3",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "a83f7938-4b2d-4932-a8d8-ec9ba72c3528",
            "title" : {
                "changed" : true,
                "value" : "Findability - Data "
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e203cdfb-61e8-4d53-b196-18bd6d49815e",
            "parentUuid" : "a83f7938-4b2d-4932-a8d8-ec9ba72c3528",
            "entityUuid" : "48d71ef2-4f70-406b-9565-373fcbba3378",
            "title" : "F2 Which data schema(s) are you using for Findability?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4a7cf5d0-6213-478e-9a65-56462a87b60e",
            "parentUuid" : "a83f7938-4b2d-4932-a8d8-ec9ba72c3528",
            "entityUuid" : "0e51cac0-c196-430f-89dc-e77950e1657b",
            "title" : "F4 In which searchable resources is your data indexed?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "ef9d3c1f-18a9-41d0-9b55-378fa6b109ee",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "90fe5b17-e1c9-4725-8cd4-935cae310674"
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "7d6de6f2-c9ee-4521-869a-58ad6fc586b1",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "4ada753c-82b9-4fbd-91f6-59700ea06e26"
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "48456d16-e1d8-40ce-9d03-836e643bdff3",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "26f61108-4b1e-458a-8005-47cb7f2e2544"
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "54b3cf0f-c303-4aea-8315-f8775abbd04e",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "b6e98a35-1830-48bb-9784-0382f16e4218"
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "3cf20d73-274c-4a51-a36b-443428af7072",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "77e8bfb9-7da6-4fcb-b1bb-4ddcea80d4c1"
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "2da15d1d-77c4-458d-a160-4061d06afbee",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "6c4591f5-18cf-452e-a846-47aee9650a61"
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "a543d43e-3dd6-444f-b000-82a52a340810",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "b6cecb73-9326-4049-9eda-bc3cc62267e8"
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "68993966-6aff-4f41-b512-23f3017a866a",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "b054bc78-b560-4dd9-a3c8-4f379195193b"
        }, 
        {
            "eventType" : "EditKnowledgeModelEvent",
            "uuid" : "94ccfa3e-c6ff-4800-bab3-5da4786464be",
            "parentUuid" : "00000000-0000-0000-0000-000000000000",
            "entityUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "name" : {
                "changed" : false
            },
            "chapterUuids" : {
                "changed" : true,
                "value" : [ 
                    "0d6d8772-7604-4835-9fe1-735ff9eb63fa", 
                    "63eecafc-fdda-47d3-92d2-d58fad54588d", 
                    "e3301b05-b02d-4c09-bb4b-7fb181414236", 
                    "cd2e9ca3-d431-4933-ac5b-1f68fa451951", 
                    "6ec73572-f031-4298-841e-e120f3359426", 
                    "a83f7938-4b2d-4932-a8d8-ec9ba72c3528"
                ]
            },
            "tagUuids" : {
                "changed" : false
            },
            "integrationUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "fec22d23-c703-44bc-ab26-6a8f4effcb7f",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "9f96fde2-644a-4531-9ebf-f562783bc473",
            "title" : "Interoperability ",
            "text" : "Chapter text"
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "be44d266-78f8-4067-8dc5-d1c681d43566",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "title" : "Accessibility",
            "text" : "Chapter text"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "22ab59cc-038f-42ac-8657-779c41326334",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "88099ca0-419e-4928-9155-431bacfc1c01",
            "title" : "A1.1 Which standardized communication protocol are you using for your data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "85aa10fb-1e19-4f28-bbbf-acc682615e59",
            "parentUuid" : "88099ca0-419e-4928-9155-431bacfc1c01",
            "entityUuid" : "d45101f6-e5f8-4e75-8d54-717298638202",
            "label" : "HTTP",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cf3ecf47-afcb-438a-a4f1-b48ba17a6b4a",
            "parentUuid" : "88099ca0-419e-4928-9155-431bacfc1c01",
            "entityUuid" : "8cb693e9-8f2a-4748-ad19-0cba92a802e0",
            "label" : "FTP",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "1974b48a-5b6f-4b51-bb86-f6d010e57a25",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "title" : {
                "changed" : true,
                "value" : "Accessibility - Data"
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "95e65dd9-75ff-410b-8821-008152fabee8",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "title" : "Accessibility - Metadata ",
            "text" : "Chapter text"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "6ffd434c-a61c-4a3e-9856-9bd24746e07d",
            "parentUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "entityUuid" : "5c16673b-0932-42e3-91ea-d1f86a1318db",
            "title" : "A2 Which metadata longevity plan do you use?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2dbe265b-df02-4d33-b2d3-7cd28d762062",
            "parentUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "entityUuid" : "94f6ea46-1b68-4f30-b055-92b7ae13639e",
            "title" : "A1 Which authorization procedure do you use for your generic metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "5c62c790-2775-47c6-8126-952ff10628cf",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "94f6ea46-1b68-4f30-b055-92b7ae13639e", 
                    "5c16673b-0932-42e3-91ea-d1f86a1318db"
                ]
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "acb6fff7-08b6-42d2-ac1a-a5157df7a92b",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "title" : {
                "changed" : true,
                "value" : "Accessibility - Metadata - generic"
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "59bb5685-77e0-4fcc-b001-d9fd2bb38f58",
            "parentUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "entityUuid" : "ff75155b-aa93-4585-b701-0833f2b27935",
            "title" : "Which authorization procedure do you use for your generic metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2a714d56-2b57-41b7-b25d-fa308d60ec59",
            "parentUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "entityUuid" : "ff75155b-aa93-4585-b701-0833f2b27935",
            "title" : {
                "changed" : true,
                "value" : "A1.2 Which authorization procedure do you use for your generic metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "10746588-c228-4020-9805-e7cde8c7ba3e",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "94f6ea46-1b68-4f30-b055-92b7ae13639e", 
                    "ff75155b-aa93-4585-b701-0833f2b27935", 
                    "5c16673b-0932-42e3-91ea-d1f86a1318db"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "af86deba-59bf-4a2f-bb9d-36762e4a1862",
            "parentUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "entityUuid" : "94f6ea46-1b68-4f30-b055-92b7ae13639e",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which authorization procedure do you use for your generic metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "4a5b20b7-7680-45f7-89a8-abfa7965083c",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "title" : {
                "changed" : true,
                "value" : "Findability of generic metadata"
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "b9cf8924-ccce-4d76-a4cd-3aa17491c097",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "6ec73572-f031-4298-841e-e120f3359426",
            "title" : {
                "changed" : true,
                "value" : "Findability of specific metadata"
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "3ddfa6d1-e4c1-4a2d-aaf8-f81d85f54cfd",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "a83f7938-4b2d-4932-a8d8-ec9ba72c3528",
            "title" : {
                "changed" : true,
                "value" : "Findability of data"
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "b9c64f91-debb-4774-9049-5f9fe4fa0c42",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "title" : {
                "changed" : true,
                "value" : "Accessibility of data"
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "d067a0e7-9697-4008-9990-2d004f191d3b",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "title" : {
                "changed" : true,
                "value" : "Accessibility of generic metadata"
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "bf6b5df0-34d4-4bbc-aa7e-a7bb80d0ed82",
            "parentUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "entityUuid" : "94f6ea46-1b68-4f30-b055-92b7ae13639e",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which standardized communication protocol are you using for your generic metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "59cbdbd3-4937-49a8-a011-4b13493cc652",
            "parentUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "entityUuid" : "5c16673b-0932-42e3-91ea-d1f86a1318db",
            "title" : {
                "changed" : true,
                "value" : "A2 Which metadata longevity plan do you use for your generic metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "2061347d-3ea4-4198-a8e4-4a28e0d04dac",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "8e520847-1c10-4c22-a7bc-783d8ec829b9",
            "title" : "Accessibility for metadata",
            "text" : "Chapter text"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2541e14c-2bd2-405e-94fe-9a563b285732",
            "parentUuid" : "8e520847-1c10-4c22-a7bc-783d8ec829b9",
            "entityUuid" : "8c18f95d-7c33-4269-8d0d-ed0de211ff3e",
            "title" : "Do you have need to differentiate between your generic and your specific metadata regarding accessibility aspects?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "55dd7ea9-3984-42ec-b406-b3b051731a00",
            "parentUuid" : "8c18f95d-7c33-4269-8d0d-ed0de211ff3e",
            "entityUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "label" : "yes",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "85e73ec6-0b64-4e24-af58-24737da8f59b",
            "parentUuid" : "8c18f95d-7c33-4269-8d0d-ed0de211ff3e",
            "entityUuid" : "37ce8256-a368-4b34-8545-2b5c12a5ce44",
            "label" : "no",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d0b6df01-1b9f-4740-adcc-3050b3a275e1",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "7aac1048-7325-45fa-8c76-82c02efc4c6d",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "8aa55abb-0508-46e4-b14d-ca1806993080",
            "parentUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "entityUuid" : "94f6ea46-1b68-4f30-b055-92b7ae13639e",
            "targetUuid" : "869da629-034b-4431-90ac-ee2060e36b20"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "39ef5e7c-4b5b-4914-8afe-83a647705ba2",
            "parentUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "entityUuid" : "ff75155b-aa93-4585-b701-0833f2b27935",
            "targetUuid" : "869da629-034b-4431-90ac-ee2060e36b20"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "69ce3af2-3800-4db4-9a28-fbe33b0fcaaf",
            "parentUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656",
            "entityUuid" : "5c16673b-0932-42e3-91ea-d1f86a1318db",
            "targetUuid" : "869da629-034b-4431-90ac-ee2060e36b20"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c715f663-f01d-45c2-8c3d-42fc5d4ceb84",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "7aac1048-7325-45fa-8c76-82c02efc4c6d",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which standardized communication protocol are you using for your specific metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "379d5941-b078-4adc-859c-c258bbbadb94",
            "parentUuid" : "8c18f95d-7c33-4269-8d0d-ed0de211ff3e",
            "entityUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : true,
                "value" : [ 
                    "94f6ea46-1b68-4f30-b055-92b7ae13639e", 
                    "7aac1048-7325-45fa-8c76-82c02efc4c6d", 
                    "ff75155b-aa93-4585-b701-0833f2b27935", 
                    "5c16673b-0932-42e3-91ea-d1f86a1318db"
                ]
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e7a3755e-c35a-489a-b9fb-31628f5f0e2a",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "a21f141e-ba6e-4de5-a138-acba9a08cf2b",
            "title" : "A1.2 Which authorization procedure do you use for your specific metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "0b1ad01d-5a26-40fa-96a8-7ec64e416398",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "fe228403-8564-4f2a-a03e-5b6a27186b12",
            "title" : "A2 Which metadata longevity plan do you use for your specific metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "4249b8d9-f406-4db8-87f3-354af3502ed1",
            "parentUuid" : "8c18f95d-7c33-4269-8d0d-ed0de211ff3e",
            "entityUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : true,
                "value" : [ 
                    "94f6ea46-1b68-4f30-b055-92b7ae13639e", 
                    "7aac1048-7325-45fa-8c76-82c02efc4c6d", 
                    "ff75155b-aa93-4585-b701-0833f2b27935", 
                    "a21f141e-ba6e-4de5-a138-acba9a08cf2b", 
                    "5c16673b-0932-42e3-91ea-d1f86a1318db", 
                    "fe228403-8564-4f2a-a03e-5b6a27186b12"
                ]
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c4ccaca0-8aae-4109-bc14-fdcc12cb8109",
            "parentUuid" : "37ce8256-a368-4b34-8545-2b5c12a5ce44",
            "entityUuid" : "a8a5be3a-abf8-4f0e-a700-4d5d8ac9f3d2",
            "title" : "A1.1 Which standardized communication protocol are you using for your metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d3e1f22e-1b5d-4cd3-9fa8-ce227ab14a7f",
            "parentUuid" : "37ce8256-a368-4b34-8545-2b5c12a5ce44",
            "entityUuid" : "c6e33cdc-81f4-4ab3-a537-a48199c60c7e",
            "title" : "A1.2 Which authorization procedure do you use for your metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "faf73501-1c00-472d-a589-4d4cce0b4c52",
            "parentUuid" : "37ce8256-a368-4b34-8545-2b5c12a5ce44",
            "entityUuid" : "c63247c9-70e7-48c2-bd26-0f63bb1e6293",
            "title" : "A2 Which metadata longevity plan do you use for your metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditKnowledgeModelEvent",
            "uuid" : "281f2081-9aa3-4d0f-a04b-035f986a6ed0",
            "parentUuid" : "00000000-0000-0000-0000-000000000000",
            "entityUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "name" : {
                "changed" : false
            },
            "chapterUuids" : {
                "changed" : true,
                "value" : [ 
                    "382f02ff-188f-4b5a-9dfb-efe6ae0c9656", 
                    "0d6d8772-7604-4835-9fe1-735ff9eb63fa", 
                    "63eecafc-fdda-47d3-92d2-d58fad54588d", 
                    "e3301b05-b02d-4c09-bb4b-7fb181414236", 
                    "cd2e9ca3-d431-4933-ac5b-1f68fa451951", 
                    "6ec73572-f031-4298-841e-e120f3359426", 
                    "a83f7938-4b2d-4932-a8d8-ec9ba72c3528", 
                    "9f96fde2-644a-4531-9ebf-f562783bc473", 
                    "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5", 
                    "8e520847-1c10-4c22-a7bc-783d8ec829b9"
                ]
            },
            "tagUuids" : {
                "changed" : false
            },
            "integrationUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d2972f03-1894-4435-aa0b-932e6438cd55",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "666e5468-2596-446e-98e5-098d9ba3378a",
            "title" : "A1.2 Which authorization procedure do you use for your metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f0ea0976-f5f6-4561-9391-58b05a3e55ad",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "666e5468-2596-446e-98e5-098d9ba3378a",
            "title" : {
                "changed" : true,
                "value" : "A1.2 Which authorization procedure do you use for your data?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "94622c93-ba40-4dee-8196-2dfe050d410d",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "5ec56d77-0efd-48c5-9ba4-f8a345f33c0a",
            "title" : "A2 Which metadata longevity plan do you use for your data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e525d096-6c51-4b46-a98c-b1732dac8162",
            "parentUuid" : "8e520847-1c10-4c22-a7bc-783d8ec829b9",
            "entityUuid" : "8c18f95d-7c33-4269-8d0d-ed0de211ff3e",
            "title" : {
                "changed" : true,
                "value" : "Do you need to differentiate between your data and metadata regarding accessibility aspects?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c2768f9b-1e5b-4aa4-beb6-cd3b3d424d9c",
            "parentUuid" : "8e520847-1c10-4c22-a7bc-783d8ec829b9",
            "entityUuid" : "8c18f95d-7c33-4269-8d0d-ed0de211ff3e",
            "title" : {
                "changed" : true,
                "value" : "Do you differentiate between your data and metadata regarding accessibility aspects?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a452cb27-578b-4630-baa9-ada72bb2d9bc",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "db906633-eb98-4131-a90c-3994341720b1",
            "title" : "Do you differentiate between data and metadata related to findability aspects?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "89ddef66-8d9c-445f-9739-4b3434e4bf81",
            "parentUuid" : "db906633-eb98-4131-a90c-3994341720b1",
            "entityUuid" : "f4b15d0a-03df-4e68-8af0-d01ba255fa23",
            "label" : "yes",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e4a282d0-0cbf-48ac-b74b-78d3feb4b721",
            "parentUuid" : "db906633-eb98-4131-a90c-3994341720b1",
            "entityUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0",
            "label" : "no",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d7e79cf5-df1d-49ac-83d6-efab76ddb1bd",
            "parentUuid" : "f4b15d0a-03df-4e68-8af0-d01ba255fa23",
            "entityUuid" : "1ee2f0a3-2348-48e3-8fc4-ed51b23a6a43",
            "title" : "Do you differentiate between generic and metadata aspect related to finadability aspects?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3ed49ca2-2010-4dff-9a94-30f576162788",
            "parentUuid" : "1ee2f0a3-2348-48e3-8fc4-ed51b23a6a43",
            "entityUuid" : "004c157d-502c-4fd8-b4c6-ad6ae55c2cca",
            "label" : "yes",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "777861b5-efd5-4b68-943f-48161c2653b7",
            "parentUuid" : "1ee2f0a3-2348-48e3-8fc4-ed51b23a6a43",
            "entityUuid" : "3795964f-9892-4727-9cf0-3a095cc95596",
            "label" : "no",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "90503dfd-5163-4227-a7c8-fd7f950e8b52",
            "parentUuid" : "a83f7938-4b2d-4932-a8d8-ec9ba72c3528",
            "entityUuid" : "41fe1eca-c262-42b1-8474-33737ee7f75f",
            "targetUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "b874c43c-6931-4295-805c-3e9fcd923d63",
            "parentUuid" : "a83f7938-4b2d-4932-a8d8-ec9ba72c3528",
            "entityUuid" : "48d71ef2-4f70-406b-9565-373fcbba3378",
            "targetUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "7528df2c-5454-4398-85a0-6b74429583cf",
            "parentUuid" : "a83f7938-4b2d-4932-a8d8-ec9ba72c3528",
            "entityUuid" : "0e51cac0-c196-430f-89dc-e77950e1657b",
            "targetUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2c15d183-ff0a-4651-968d-8ae103fe2e95",
            "parentUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0",
            "entityUuid" : "48d71ef2-4f70-406b-9565-373fcbba3378",
            "title" : {
                "changed" : true,
                "value" : "F2 Which data schema(s) are you using for findability?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "a4c25b8c-ea19-4ce2-9347-16fd4c15fa65",
            "parentUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0",
            "entityUuid" : "41fe1eca-c262-42b1-8474-33737ee7f75f",
            "targetUuid" : "f4b15d0a-03df-4e68-8af0-d01ba255fa23"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "00dd0ae3-00af-4765-add5-e1db1b28215e",
            "parentUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0",
            "entityUuid" : "48d71ef2-4f70-406b-9565-373fcbba3378",
            "targetUuid" : "f4b15d0a-03df-4e68-8af0-d01ba255fa23"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "aebcf475-26ac-493e-bf4d-9008c0f68383",
            "parentUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0",
            "entityUuid" : "0e51cac0-c196-430f-89dc-e77950e1657b",
            "targetUuid" : "f4b15d0a-03df-4e68-8af0-d01ba255fa23"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "3f3b1844-7be4-4f64-ada2-5638f8d6471a",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "c225d92d-4bae-40a7-8bd4-aba3fcd89782",
            "targetUuid" : "004c157d-502c-4fd8-b4c6-ad6ae55c2cca"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "71646a9a-3f2e-4b0e-9926-7ba587193656",
            "parentUuid" : "6ec73572-f031-4298-841e-e120f3359426",
            "entityUuid" : "3668c504-7e37-4eb8-806a-17fd2a68fa0d",
            "targetUuid" : "f4b15d0a-03df-4e68-8af0-d01ba255fa23"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "41116104-d016-45b5-bf46-b2af6cb434ea",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "00b92c11-5c87-4e24-b225-180af07943a6",
            "targetUuid" : "004c157d-502c-4fd8-b4c6-ad6ae55c2cca"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "31c3b0b6-9181-4c59-844b-4c4188ac22ae",
            "parentUuid" : "6ec73572-f031-4298-841e-e120f3359426",
            "entityUuid" : "decc4c95-53f6-44c1-a653-ce86a7ac321f",
            "targetUuid" : "004c157d-502c-4fd8-b4c6-ad6ae55c2cca"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "4fc06b95-946f-4161-984b-fd5b04a50763",
            "parentUuid" : "f4b15d0a-03df-4e68-8af0-d01ba255fa23",
            "entityUuid" : "3668c504-7e37-4eb8-806a-17fd2a68fa0d",
            "targetUuid" : "004c157d-502c-4fd8-b4c6-ad6ae55c2cca"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "ecda3dc0-168a-4138-897d-542a61fef2ef",
            "parentUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951",
            "entityUuid" : "6e387833-fa76-47ad-9f20-276aef64c475",
            "targetUuid" : "004c157d-502c-4fd8-b4c6-ad6ae55c2cca"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "dbabac39-144b-448d-87e6-0b6ce9c5672b",
            "parentUuid" : "6ec73572-f031-4298-841e-e120f3359426",
            "entityUuid" : "6e94698a-10f2-4bac-b368-45434b98f81f",
            "targetUuid" : "004c157d-502c-4fd8-b4c6-ad6ae55c2cca"
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "df70bb88-559d-4464-bc31-7f93ef32c61e",
            "parentUuid" : "1ee2f0a3-2348-48e3-8fc4-ed51b23a6a43",
            "entityUuid" : "004c157d-502c-4fd8-b4c6-ad6ae55c2cca",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : true,
                "value" : [ 
                    "c225d92d-4bae-40a7-8bd4-aba3fcd89782", 
                    "3668c504-7e37-4eb8-806a-17fd2a68fa0d", 
                    "00b92c11-5c87-4e24-b225-180af07943a6", 
                    "decc4c95-53f6-44c1-a653-ce86a7ac321f", 
                    "6e387833-fa76-47ad-9f20-276aef64c475", 
                    "6e94698a-10f2-4bac-b368-45434b98f81f"
                ]
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "8424b2f1-9f17-4957-b430-372387e9960b",
            "parentUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0",
            "entityUuid" : "4b121e93-f26d-4fdb-b914-7e8468683bc3",
            "title" : "F1 What globally unique, persistent, resolvable identifiers do you use for (meta)data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "085a2275-5a18-4f6a-865d-9b192d215cdc",
            "parentUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0",
            "entityUuid" : "1aa8b203-efe0-4ef7-9bde-de2b9d6a7146",
            "title" : "F2 Which (meta)data schema(s) are you using for findability?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e3d308e6-fe02-4055-95fa-6f18ddf2911b",
            "parentUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0",
            "entityUuid" : "1529399d-0f32-42d5-95a8-aff155450c49",
            "title" : "F4 In which searchable resources is your (meta)data indexed?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "9f7f00cb-d1e4-4d61-ab10-606e7e19fd35",
            "parentUuid" : "db906633-eb98-4131-a90c-3994341720b1",
            "entityUuid" : "f4b15d0a-03df-4e68-8af0-d01ba255fa23",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : true,
                "value" : [ 
                    "41fe1eca-c262-42b1-8474-33737ee7f75f", 
                    "48d71ef2-4f70-406b-9565-373fcbba3378", 
                    "0e51cac0-c196-430f-89dc-e77950e1657b", 
                    "1ee2f0a3-2348-48e3-8fc4-ed51b23a6a43"
                ]
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "108948ed-d85f-4be0-97e6-1c2eedf0e365",
            "parentUuid" : "f4b15d0a-03df-4e68-8af0-d01ba255fa23",
            "entityUuid" : "1ee2f0a3-2348-48e3-8fc4-ed51b23a6a43",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : true,
                "value" : [ 
                    "3795964f-9892-4727-9cf0-3a095cc95596", 
                    "004c157d-502c-4fd8-b4c6-ad6ae55c2cca"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a01617d3-6226-46a8-8364-8ae03f20a69f",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "db906633-eb98-4131-a90c-3994341720b1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : true,
                "value" : [ 
                    "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0", 
                    "f4b15d0a-03df-4e68-8af0-d01ba255fa23"
                ]
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ccc514ec-f21a-4308-b406-3d50b0b22482",
            "parentUuid" : "3795964f-9892-4727-9cf0-3a095cc95596",
            "entityUuid" : "3b033262-cc7f-4924-b311-49b48fc4ce40",
            "title" : "F1 What globally unique, persistent, resolvable identifiers do you use for metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "75ff3377-e378-4ef5-871b-001ccccb674d",
            "parentUuid" : "3795964f-9892-4727-9cf0-3a095cc95596",
            "entityUuid" : "1c5ffc01-1be1-42f6-bbaf-18490a8ceee1",
            "title" : "F2 Which metadata schema(s) are you using for findability?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7edeaec8-ef60-4e22-b420-c3b66cb34f99",
            "parentUuid" : "3795964f-9892-4727-9cf0-3a095cc95596",
            "entityUuid" : "7f5b6b02-8ece-4f5a-8d6e-cef1dcdd5b48",
            "title" : "F2 Which metadata schema(s) are you using for findability?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f4b22505-09c9-462a-9a9c-eef0883ee085",
            "parentUuid" : "3795964f-9892-4727-9cf0-3a095cc95596",
            "entityUuid" : "7f5b6b02-8ece-4f5a-8d6e-cef1dcdd5b48",
            "title" : {
                "changed" : true,
                "value" : "F4 In which searchable resources is your metadata indexed?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "139026d0-a0ac-41f6-bfb0-ff66be1c5618",
            "parentUuid" : "004c157d-502c-4fd8-b4c6-ad6ae55c2cca",
            "entityUuid" : "00b92c11-5c87-4e24-b225-180af07943a6",
            "title" : {
                "changed" : true,
                "value" : "F2 Which generic metadata schema(s) are you using for findability?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "43720dd7-db90-4e70-a4aa-b407e381847b",
            "parentUuid" : "004c157d-502c-4fd8-b4c6-ad6ae55c2cca",
            "entityUuid" : "decc4c95-53f6-44c1-a653-ce86a7ac321f",
            "title" : {
                "changed" : true,
                "value" : "F2 Which specific metadata schema(s) are you using for findability?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "bcc8398e-9607-4cf3-b2b9-a7db99fcc87a",
            "parentUuid" : "f4b15d0a-03df-4e68-8af0-d01ba255fa23",
            "entityUuid" : "1ee2f0a3-2348-48e3-8fc4-ed51b23a6a43",
            "title" : {
                "changed" : true,
                "value" : "Do you differentiate between generic and specific metadata aspect related to findability aspects?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "17b5ab05-fb78-43ab-b0f6-e265d579ac52",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "cd2e9ca3-d431-4933-ac5b-1f68fa451951"
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "d349ac2d-bb5d-416d-a3c3-2460c3053f63",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "6ec73572-f031-4298-841e-e120f3359426"
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "5d37cd96-c64a-4416-a421-4162c4f768cb",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "9f96fde2-644a-4531-9ebf-f562783bc473"
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "471f3198-25ca-457d-8250-e08c5178fb6b",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "a83f7938-4b2d-4932-a8d8-ec9ba72c3528"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "de2b406b-f862-4c6a-b136-de6e618b9b05",
            "parentUuid" : "f4b15d0a-03df-4e68-8af0-d01ba255fa23",
            "entityUuid" : "1ee2f0a3-2348-48e3-8fc4-ed51b23a6a43",
            "title" : {
                "changed" : true,
                "value" : "Do you differentiate between generic and domain specific metadata aspect related to findability aspects?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "21fb1ebe-564c-451a-88bd-50a029dc37bb",
            "parentUuid" : "004c157d-502c-4fd8-b4c6-ad6ae55c2cca",
            "entityUuid" : "3668c504-7e37-4eb8-806a-17fd2a68fa0d",
            "title" : {
                "changed" : true,
                "value" : "F1 What globally unique, persistent, resolvable identifiers do you use for your domain specific metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ee1a2115-25a6-43b3-9297-14a5c9ad4b47",
            "parentUuid" : "004c157d-502c-4fd8-b4c6-ad6ae55c2cca",
            "entityUuid" : "decc4c95-53f6-44c1-a653-ce86a7ac321f",
            "title" : {
                "changed" : true,
                "value" : "F2 Which domain specific metadata schema(s) are you using for findability?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "1884a0ea-3f01-4690-a416-275c5c03fc4c",
            "parentUuid" : "004c157d-502c-4fd8-b4c6-ad6ae55c2cca",
            "entityUuid" : "6e94698a-10f2-4bac-b368-45434b98f81f",
            "title" : {
                "changed" : true,
                "value" : "F4 In which searchable resources is your domain specific metadata indexed?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "9df905c0-ee8d-4cce-828a-b08ce39f86a4",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "title" : {
                "changed" : true,
                "value" : "Accessibility"
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "45a1c9a0-f69a-4a09-a5b7-53fd1ddb0106",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "382f02ff-188f-4b5a-9dfb-efe6ae0c9656"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "366313e4-a033-418e-b00d-489425ac615e",
            "parentUuid" : "8e520847-1c10-4c22-a7bc-783d8ec829b9",
            "entityUuid" : "8c18f95d-7c33-4269-8d0d-ed0de211ff3e",
            "targetUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "8dabda12-6ab3-49ea-bc52-f280b2fe46b6",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "88099ca0-419e-4928-9155-431bacfc1c01",
            "targetUuid" : "869da629-034b-4431-90ac-ee2060e36b20"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "a2f3a004-114e-4cf1-93e2-269e4661e737",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "666e5468-2596-446e-98e5-098d9ba3378a",
            "targetUuid" : "869da629-034b-4431-90ac-ee2060e36b20"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "257c433e-db72-477d-9735-9cde6507724c",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "5ec56d77-0efd-48c5-9ba4-f8a345f33c0a",
            "targetUuid" : "869da629-034b-4431-90ac-ee2060e36b20"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "822f58a2-0497-47c6-9e26-a5233c967648",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "f506d2f7-82fc-4ee2-962f-fc45f3ffe2a0",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4a5c245d-c790-40ca-beed-0aa4bc9e7378",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "7aac1048-7325-45fa-8c76-82c02efc4c6d",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which standardized communication protocol are you using for your domain specific metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "519dd0f4-4f84-4245-bab2-62eb77243b25",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "a21f141e-ba6e-4de5-a138-acba9a08cf2b",
            "title" : {
                "changed" : true,
                "value" : "A1.2 Which authorization procedure do you use for your domain specific metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "e15f61ac-7252-4264-a44d-bd633ef5d4ee",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "8e520847-1c10-4c22-a7bc-783d8ec829b9"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7ed7a12f-eada-4215-abca-0a5a881466f4",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "f506d2f7-82fc-4ee2-962f-fc45f3ffe2a0",
            "title" : {
                "changed" : true,
                "value" : "Do you differentiate between your generic metadata and domain specific metadata regarding accessibility aspects?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c9217608-bc3f-46b3-8e41-ce9d162662ea",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "8c18f95d-7c33-4269-8d0d-ed0de211ff3e",
            "title" : {
                "changed" : true,
                "value" : "Do you differentiate between your data and metadata related to accessibility aspects?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e0ad43b4-23c9-4dc4-bd3c-612bb74d8a62",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "f506d2f7-82fc-4ee2-962f-fc45f3ffe2a0",
            "title" : {
                "changed" : true,
                "value" : "Do you differentiate between your generic metadata and domain specific metadata related to accessibility aspects?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "997cb6d2-9164-42a9-b015-9977ad8173ff",
            "parentUuid" : "f506d2f7-82fc-4ee2-962f-fc45f3ffe2a0",
            "entityUuid" : "f69ab9c3-bbfa-4f69-ad94-5a334da923f4",
            "label" : "yes",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "229cb6d1-20d1-4591-b211-8cc5109dfd5f",
            "parentUuid" : "f506d2f7-82fc-4ee2-962f-fc45f3ffe2a0",
            "entityUuid" : "756897d8-c754-48f7-b333-eb1e5bcfd797",
            "label" : "no",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "dbfe7cd5-55f1-48d8-992c-2be05d38e257",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "94f6ea46-1b68-4f30-b055-92b7ae13639e",
            "targetUuid" : "f69ab9c3-bbfa-4f69-ad94-5a334da923f4"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "f30ffcc5-c781-4e78-8fa2-a76f36cc1077",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "7aac1048-7325-45fa-8c76-82c02efc4c6d",
            "targetUuid" : "f69ab9c3-bbfa-4f69-ad94-5a334da923f4"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "f07fdf65-bdd2-44ee-a2c2-fb5da6e2c0e4",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "ff75155b-aa93-4585-b701-0833f2b27935",
            "targetUuid" : "f69ab9c3-bbfa-4f69-ad94-5a334da923f4"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3243da1e-4cf1-4c31-929c-28499219231a",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "fe228403-8564-4f2a-a03e-5b6a27186b12",
            "title" : {
                "changed" : true,
                "value" : "A2 Which metadata longevity plan do you use for your domain specific metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "2d3343bb-17aa-4dc1-8533-604725a4e04d",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "a21f141e-ba6e-4de5-a138-acba9a08cf2b",
            "targetUuid" : "f69ab9c3-bbfa-4f69-ad94-5a334da923f4"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "3b99e59a-cb97-4554-8998-974f32d7237d",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "5c16673b-0932-42e3-91ea-d1f86a1318db",
            "targetUuid" : "f69ab9c3-bbfa-4f69-ad94-5a334da923f4"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "0370175f-513d-4af6-9071-43e6b0d9a61e",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "fe228403-8564-4f2a-a03e-5b6a27186b12",
            "targetUuid" : "f69ab9c3-bbfa-4f69-ad94-5a334da923f4"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5b26dd8b-e8e3-4f07-a7c4-6275ee7f5734",
            "parentUuid" : "756897d8-c754-48f7-b333-eb1e5bcfd797",
            "entityUuid" : "1d6d21bf-30c1-4944-9ac5-353d68ddf130",
            "title" : "A1.1 Which standardized communication protocol are you using for your generic metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "68d6f9e3-c7c0-4ced-aac8-7a43c0a466ec",
            "parentUuid" : "756897d8-c754-48f7-b333-eb1e5bcfd797",
            "entityUuid" : "1d6d21bf-30c1-4944-9ac5-353d68ddf130",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which standardized communication protocol are you using for your metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5f4829b7-8fa4-42f3-bf85-ee35f1080f40",
            "parentUuid" : "756897d8-c754-48f7-b333-eb1e5bcfd797",
            "entityUuid" : "910a0623-c291-414f-a267-3eae0930696f",
            "title" : "A1.2 Which authorization procedure do you use for your metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "72d03be6-13c0-4819-97b5-b77a2c4a7307",
            "parentUuid" : "756897d8-c754-48f7-b333-eb1e5bcfd797",
            "entityUuid" : "4e69638d-cfd7-433b-b502-365d93951b43",
            "title" : "A2 Which metadata longevity plan do you use for your data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "7424ef42-bc22-4256-b989-87a5b03c3dc2",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "5ec56d77-0efd-48c5-9ba4-f8a345f33c0a"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "cf9b9472-f28e-4686-9554-a70c69d87428",
            "parentUuid" : "756897d8-c754-48f7-b333-eb1e5bcfd797",
            "entityUuid" : "4e69638d-cfd7-433b-b502-365d93951b43",
            "title" : {
                "changed" : true,
                "value" : "A2 Which metadata longevity plan do you use for your metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a47fb448-9088-4ff7-aafa-17698d70bf31",
            "parentUuid" : "869da629-034b-4431-90ac-ee2060e36b20",
            "entityUuid" : "f506d2f7-82fc-4ee2-962f-fc45f3ffe2a0",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : true,
                "value" : [ 
                    "756897d8-c754-48f7-b333-eb1e5bcfd797", 
                    "f69ab9c3-bbfa-4f69-ad94-5a334da923f4"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2085be6c-c0b1-416c-9d06-a92ed2b39aef",
            "parentUuid" : "37ce8256-a368-4b34-8545-2b5c12a5ce44",
            "entityUuid" : "a8a5be3a-abf8-4f0e-a700-4d5d8ac9f3d2",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which standardized communication protocol are you using for your (meta)data?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "712418d0-f88c-43bc-a2c3-f2a30a753f66",
            "parentUuid" : "37ce8256-a368-4b34-8545-2b5c12a5ce44",
            "entityUuid" : "c63247c9-70e7-48c2-bd26-0f63bb1e6293"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7216d7dd-589c-4a75-aa60-d85237570c88",
            "parentUuid" : "37ce8256-a368-4b34-8545-2b5c12a5ce44",
            "entityUuid" : "c6e33cdc-81f4-4ab3-a537-a48199c60c7e",
            "title" : {
                "changed" : true,
                "value" : "A1.2 Which authorization procedure do you use for your (meta)data?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7c37f6ac-40af-41d2-901b-d7f2b0a3aff0",
            "parentUuid" : "37ce8256-a368-4b34-8545-2b5c12a5ce44",
            "entityUuid" : "48891062-bb50-4db5-b681-e369750e7484",
            "title" : "A2 Which metadata longevity plan do you use for your metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "1929ad8c-4b1e-45a6-b77b-a1f2f848fb9f",
            "parentUuid" : "37ce8256-a368-4b34-8545-2b5c12a5ce44",
            "entityUuid" : "48891062-bb50-4db5-b681-e369750e7484",
            "targetUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "c8bad97b-1856-47d5-be55-d231ebc605e7",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "48891062-bb50-4db5-b681-e369750e7484", 
                    "8c18f95d-7c33-4269-8d0d-ed0de211ff3e"
                ]
            }
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "594acdec-4326-4503-a002-233bfee6e172",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "48891062-bb50-4db5-b681-e369750e7484",
            "targetUuid" : "37ce8256-a368-4b34-8545-2b5c12a5ce44"
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "475ecbe6-2543-499f-b67b-b3ac60ea68dd",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "title" : "Interoperability",
            "text" : "Chapter text"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "bfe26ea7-e585-408f-a34d-e18eedc3b326",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "950facc9-7730-4b43-90fb-fdf8048d861e",
            "title" : "Which knowledge representation languages (allowing machine-interoperation) do you use?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ee9ce9fa-744b-4953-80a5-fc73fb3f6ec6",
            "parentUuid" : "950facc9-7730-4b43-90fb-fdf8048d861e",
            "entityUuid" : "ee50a71f-f3bd-4a71-b547-dfc34c0850aa",
            "label" : "RDF",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "b1bf218f-c43e-44f0-b34f-7ebb452031d2",
            "parentUuid" : "ee50a71f-f3bd-4a71-b547-dfc34c0850aa",
            "entityUuid" : "f5e530df-ab78-4810-8990-5082834713ea",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bb88dc35-33e2-4ab0-a4d3-d219f34bd9de",
            "parentUuid" : "950facc9-7730-4b43-90fb-fdf8048d861e",
            "entityUuid" : "5b27b921-1784-49ae-8b5c-f04cee92857d",
            "label" : "OWL",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "326f47ac-d156-482b-b11d-dbf25b933f12",
            "parentUuid" : "950facc9-7730-4b43-90fb-fdf8048d861e",
            "entityUuid" : "4d645e99-9c36-4a95-8ca9-a785aee3ef13",
            "label" : "XML",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "6ebcf012-a514-4650-b14f-57dfada617f7",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "950facc9-7730-4b43-90fb-fdf8048d861e",
            "title" : {
                "changed" : true,
                "value" : "I1 Which knowledge representation languages (allowing machine-interoperation) do you use?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "8727f16b-3c59-4e3f-87e4-e31087452693",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "885820c7-2605-4b60-90fe-e9f55fae6e9e",
            "title" : "Do you differentiate between data and metadata related to interoperability aspects?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "847f2789-253c-4352-ade4-94128e8bc97f",
            "parentUuid" : "885820c7-2605-4b60-90fe-e9f55fae6e9e",
            "entityUuid" : "404e67a8-56cc-428c-b974-4572deabe36a",
            "label" : "yes",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a6799b90-6d23-442f-ad05-dd70420b3cbd",
            "parentUuid" : "885820c7-2605-4b60-90fe-e9f55fae6e9e",
            "entityUuid" : "c753f289-fe95-4dac-85ff-4171d7c0aee5",
            "label" : "no",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "666c97c9-bc0b-440a-8553-a255eaa6dae9",
            "parentUuid" : "404e67a8-56cc-428c-b974-4572deabe36a",
            "entityUuid" : "b02fe5a2-8fef-46a7-9559-da3241de9c3e",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "e3d26de2-670b-41f2-8542-960b2ee801b8",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "950facc9-7730-4b43-90fb-fdf8048d861e",
            "targetUuid" : "404e67a8-56cc-428c-b974-4572deabe36a"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "56ceb865-c2b1-486f-9b75-8ef215d89a66",
            "parentUuid" : "404e67a8-56cc-428c-b974-4572deabe36a",
            "entityUuid" : "950facc9-7730-4b43-90fb-fdf8048d861e",
            "title" : {
                "changed" : true,
                "value" : "I1 Which knowledge representation languages (allowing machine-interoperation) do you use for your data?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "8519007b-3121-4c26-8e0b-482afee5b98f",
            "parentUuid" : "404e67a8-56cc-428c-b974-4572deabe36a",
            "entityUuid" : "b02fe5a2-8fef-46a7-9559-da3241de9c3e",
            "title" : {
                "changed" : true,
                "value" : "I1 Which knowledge representation languages (allowing machine-interoperation) do you use for your metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "27f19abb-bd35-4917-99aa-a10a33295419",
            "parentUuid" : "c753f289-fe95-4dac-85ff-4171d7c0aee5",
            "entityUuid" : "73055e5a-5711-4716-b51f-4ef35818b3e9",
            "title" : "I1 Which knowledge representation languages (allowing machine-interoperation) do you use for your (meta)data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "15f0f780-fd83-4c4a-9e7c-94af99124935",
            "parentUuid" : "404e67a8-56cc-428c-b974-4572deabe36a",
            "entityUuid" : "b02fe5a2-8fef-46a7-9559-da3241de9c3e",
            "title" : {
                "changed" : true,
                "value" : "Do you differentiate between generic metadata and domain specific metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "aaef5a6e-0991-452d-b987-f47b44619881",
            "parentUuid" : "b02fe5a2-8fef-46a7-9559-da3241de9c3e",
            "entityUuid" : "29c105e7-c98e-487a-9d32-371b4f612967",
            "label" : "yes",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c4b26d5a-0f18-4a7e-9cb8-37a5bdcbae08",
            "parentUuid" : "b02fe5a2-8fef-46a7-9559-da3241de9c3e",
            "entityUuid" : "3d62e9fd-ef77-4455-82d6-45077af9d336",
            "label" : "no",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "cb6f27e6-2854-41a9-9a6c-87bd0f9182a6",
            "parentUuid" : "885820c7-2605-4b60-90fe-e9f55fae6e9e",
            "entityUuid" : "404e67a8-56cc-428c-b974-4572deabe36a",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : true,
                "value" : [ 
                    "950facc9-7730-4b43-90fb-fdf8048d861e", 
                    "b02fe5a2-8fef-46a7-9559-da3241de9c3e"
                ]
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "26b2d696-d1e0-4aba-86d5-45c26a693cd0",
            "parentUuid" : "29c105e7-c98e-487a-9d32-371b4f612967",
            "entityUuid" : "e0e60d51-ca3e-459c-94ff-0ce9e12627c7",
            "title" : "I1 Which knowledge representation languages (allowing machine-interoperation) do you use for your generic metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ac6a93d6-8f73-483f-bbad-6e883b8e4ea7",
            "parentUuid" : "29c105e7-c98e-487a-9d32-371b4f612967",
            "entityUuid" : "dbaf8d1c-ac4b-49c4-b7ca-cd276b30607d",
            "title" : "I1 Which knowledge representation languages (allowing machine-interoperation) do you use for your domain specific data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "b0dd0a8b-2ffe-4b80-b3ef-918065be6222",
            "parentUuid" : "3d62e9fd-ef77-4455-82d6-45077af9d336",
            "entityUuid" : "d45ba26b-8c04-4791-85d3-953baef4ce80",
            "title" : "I1 Which knowledge representation languages (allowing machine-interoperation) do you use for your metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5c99bc02-e42d-4c41-9593-1eb9a7bb44e4",
            "parentUuid" : "404e67a8-56cc-428c-b974-4572deabe36a",
            "entityUuid" : "c5dd6db5-08c0-4778-89ba-6fae1408df6c",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "88b23fae-4631-4330-91c2-de23f8364cff",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : null
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3eac7a3c-3197-446e-bff1-c1081e4f4a10",
            "parentUuid" : "c753f289-fe95-4dac-85ff-4171d7c0aee5",
            "entityUuid" : "5466b57b-76a6-4243-9768-d0cffb94172c",
            "title" : "I2 Which vocabularies do you use for your (meta)data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "113c0715-e232-43e4-81bb-2406d826dfef",
            "parentUuid" : "c753f289-fe95-4dac-85ff-4171d7c0aee5",
            "entityUuid" : "e6e77d8a-ebe9-4ed1-8cdd-3b103a7bd47a",
            "title" : "I3 What are the predicates used in the ",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "26aa1221-5ae8-4bc0-903d-196141fb7d20",
            "parentUuid" : "404e67a8-56cc-428c-b974-4572deabe36a",
            "entityUuid" : "c5dd6db5-08c0-4778-89ba-6fae1408df6c",
            "title" : {
                "changed" : true,
                "value" : "I2 Which vocabularies do you use for your metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "91501645-c085-4122-9e41-bc9ab474276b",
            "parentUuid" : "404e67a8-56cc-428c-b974-4572deabe36a",
            "entityUuid" : "c5dd6db5-08c0-4778-89ba-6fae1408df6c",
            "targetUuid" : "c753f289-fe95-4dac-85ff-4171d7c0aee5"
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "54624c37-91d2-4ece-9add-4d2364d1b1a3",
            "parentUuid" : "c753f289-fe95-4dac-85ff-4171d7c0aee5",
            "entityUuid" : "c5dd6db5-08c0-4778-89ba-6fae1408df6c",
            "targetUuid" : "3d62e9fd-ef77-4455-82d6-45077af9d336"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "052d46ae-82dc-4f19-bf9c-3833a77ff402",
            "parentUuid" : "3d62e9fd-ef77-4455-82d6-45077af9d336",
            "entityUuid" : "29cecd1b-fa23-4fc6-9b37-804a3fe4f930",
            "title" : "I3 Which models, schemas do you use for your metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c30718e4-d32b-4fcd-bd44-9c7d285b5d6f",
            "parentUuid" : "29c105e7-c98e-487a-9d32-371b4f612967",
            "entityUuid" : "1256cbca-b439-4b5d-9c79-a1396e18e8f3",
            "title" : "I2 Which vocabularies do you use for your generic metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ca0455e6-5fcf-4123-843a-005e5020e28a",
            "parentUuid" : "29c105e7-c98e-487a-9d32-371b4f612967",
            "entityUuid" : "7e36c32b-d836-4927-beab-1b6ecac847b0",
            "title" : "I2 Which vocabularies do you use for your domain specific metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "af94d485-bb09-4b5f-ae70-ceaa2eb3cccb",
            "parentUuid" : "29c105e7-c98e-487a-9d32-371b4f612967",
            "entityUuid" : "ad2bf43b-4371-4812-a42d-666a218aa1c7",
            "title" : "I3 Which models, schemas do you use for your generic metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "0601c532-a935-4063-b370-bbc8cb4da4d0",
            "parentUuid" : "29c105e7-c98e-487a-9d32-371b4f612967",
            "entityUuid" : "5f5d2b1f-03a7-4e31-86d6-d3d0ac40ed7b",
            "title" : "I3 Which models, schemas do you use for your domain-specific metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "a65f2327-b0ae-44c1-8770-d11197216ac6",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "title" : "Reusability",
            "text" : "Chapter text"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "210dbc74-0fd8-4cb7-9a3f-0ba6fac45f94",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "920a584e-8579-49b3-a1ab-d8d00ae1a86b",
            "title" : "Do you differentiate between data and metadata related to reusability aspects?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "955285cb-601d-48e4-81f4-c7cb066eff25",
            "parentUuid" : "920a584e-8579-49b3-a1ab-d8d00ae1a86b",
            "entityUuid" : "ee436595-6777-4e41-b7b0-e1089c4e0249",
            "label" : "yes",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "dd309356-c57b-4445-a424-7872a71fd1d4",
            "parentUuid" : "920a584e-8579-49b3-a1ab-d8d00ae1a86b",
            "entityUuid" : "63e12c93-88f9-4cb7-9795-44c8e80afd3e",
            "label" : "no",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ace2aa34-bff7-4530-ae59-8983388391b4",
            "parentUuid" : "63e12c93-88f9-4cb7-9795-44c8e80afd3e",
            "entityUuid" : "3fb9106a-e30c-447a-bd43-d614ea70e7c4",
            "title" : "Which license do you use for your (meta)data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "0c51bcfb-8da0-4dd5-bdc3-065f9d441ca9",
            "parentUuid" : "63e12c93-88f9-4cb7-9795-44c8e80afd3e",
            "entityUuid" : "8617edee-0ca3-408f-a03f-2cedff02bec6",
            "title" : "Which metadata schema are you using describing the provenance of your (meta)data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4ce2f98c-80b7-4653-ae2a-1143d8c9da0d",
            "parentUuid" : "ee436595-6777-4e41-b7b0-e1089c4e0249",
            "entityUuid" : "ec4d751d-a5ce-4bde-a9de-0970a976a481",
            "title" : "Do you differentiate between generic and domain specific metadata related to reusability aspects?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "69af58d4-16a2-424d-acd8-275bec7a6c2f",
            "parentUuid" : "ec4d751d-a5ce-4bde-a9de-0970a976a481",
            "entityUuid" : "b8829567-873b-49ab-952d-6d9159c8dd9b",
            "label" : "yes",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5510336f-cef8-4c76-96e1-18ab5aa0baa8",
            "parentUuid" : "ec4d751d-a5ce-4bde-a9de-0970a976a481",
            "entityUuid" : "c42f747e-c663-48f8-b357-923d0735a791",
            "label" : "no",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "38d34bed-3ca7-4097-83ba-7e9b5b3f7839",
            "parentUuid" : "c42f747e-c663-48f8-b357-923d0735a791",
            "entityUuid" : "b491577c-dd72-445c-9c4a-b572bd718c78",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "6dfa1ccd-3a1c-42c4-b474-afc593ebe175",
            "parentUuid" : "c42f747e-c663-48f8-b357-923d0735a791",
            "entityUuid" : "b491577c-dd72-445c-9c4a-b572bd718c78",
            "title" : {
                "changed" : true,
                "value" : "Which license do you use for your metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d233ebb8-608d-4219-8ec4-1f8f6d733604",
            "parentUuid" : "c42f747e-c663-48f8-b357-923d0735a791",
            "entityUuid" : "0578fe92-a3cd-4b61-a144-0ed72c4cae5f",
            "title" : "Which license do you use for your data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f6a3396d-5ea6-4aba-a1f7-2d928cfd80cc",
            "parentUuid" : "b8829567-873b-49ab-952d-6d9159c8dd9b",
            "entityUuid" : "a5ba626a-6a4e-4f4b-9314-44e45bb2754d",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f26ea9e9-797a-47f5-85c9-d707a90168dd",
            "parentUuid" : "b8829567-873b-49ab-952d-6d9159c8dd9b",
            "entityUuid" : "a5ba626a-6a4e-4f4b-9314-44e45bb2754d",
            "title" : {
                "changed" : true,
                "value" : "Which license do you use for your generic metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "10c5db47-0f1e-4501-ad1b-a83bae0acd84",
            "parentUuid" : "b8829567-873b-49ab-952d-6d9159c8dd9b",
            "entityUuid" : "e71a3e8a-a60c-4437-b80f-aa8542325961",
            "title" : "Which license do you use for your domain specific metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "eee0117a-a38d-4968-8b90-756c3cfed070",
            "parentUuid" : "c42f747e-c663-48f8-b357-923d0735a791",
            "entityUuid" : "d5073730-9949-449a-9de8-ca7bfbcebb3e",
            "title" : "Which metadata schema are you using describing the provenance of your metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ef0d734d-e0ce-4344-b0d8-9ba44e1817ee",
            "parentUuid" : "c42f747e-c663-48f8-b357-923d0735a791",
            "entityUuid" : "c7f35b12-5190-4ed2-9fba-22579d19735b",
            "title" : "Which metadata schema are you using describing the provenance of your data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "86b3ec74-e88a-4d79-a63c-1e8b7048beb3",
            "parentUuid" : "b8829567-873b-49ab-952d-6d9159c8dd9b",
            "entityUuid" : "14080ad8-80e9-416e-afbb-2f7765d1e0c2",
            "title" : "Which metadata schema are you using describing the provenance of your generic metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "14ea93d7-8441-442e-bf90-f1f88ba2f63b",
            "parentUuid" : "b8829567-873b-49ab-952d-6d9159c8dd9b",
            "entityUuid" : "01ae7d8f-dc8b-4dca-9bfa-4ed63a8af572",
            "title" : "Which metadata schema are you using describing the provenance of your domain specific metadata?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "cb42dd1b-bd89-44e2-86f0-150e47271423",
            "parentUuid" : "ee436595-6777-4e41-b7b0-e1089c4e0249",
            "entityUuid" : "ed8e9c9c-e8f8-4c5a-9f53-6b01b75f2e2e",
            "title" : "Which license do you use for your data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "91c8f85a-9d08-44f9-aae4-aee3b1ebb098",
            "parentUuid" : "ee436595-6777-4e41-b7b0-e1089c4e0249",
            "entityUuid" : "a3b57aea-2f66-4282-9173-757f1a2728bd",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f2e3a043-c919-43fb-8caf-891b8417f714",
            "parentUuid" : "ee436595-6777-4e41-b7b0-e1089c4e0249",
            "entityUuid" : "a3b57aea-2f66-4282-9173-757f1a2728bd",
            "title" : {
                "changed" : true,
                "value" : "Which metadata schema are you using describing the provenance of your data?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "0d05b429-0d8c-4ad8-bd2d-2ff5f35a68aa",
            "parentUuid" : "920a584e-8579-49b3-a1ab-d8d00ae1a86b",
            "entityUuid" : "ee436595-6777-4e41-b7b0-e1089c4e0249",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : true,
                "value" : [ 
                    "ed8e9c9c-e8f8-4c5a-9f53-6b01b75f2e2e", 
                    "a3b57aea-2f66-4282-9173-757f1a2728bd", 
                    "ec4d751d-a5ce-4bde-a9de-0970a976a481"
                ]
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "52c14f54-8910-4401-bc85-6057151cbc85",
            "parentUuid" : "c753f289-fe95-4dac-85ff-4171d7c0aee5",
            "entityUuid" : "e6e77d8a-ebe9-4ed1-8cdd-3b103a7bd47a",
            "title" : {
                "changed" : true,
                "value" : "I3 Which models, schemas do you use for your metadata?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "006c571d-4596-471e-8abb-f4a6b9f248e4",
            "parentUuid" : "c753f289-fe95-4dac-85ff-4171d7c0aee5",
            "entityUuid" : "e6e77d8a-ebe9-4ed1-8cdd-3b103a7bd47a",
            "title" : {
                "changed" : true,
                "value" : "I3 Which models, schemas do you use for your (meta)data?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5048ec57-2a88-4431-b94e-0ab9c8625fc6",
            "parentUuid" : "404e67a8-56cc-428c-b974-4572deabe36a",
            "entityUuid" : "77e425d2-77b3-4255-aa1e-98a5e0498ac1",
            "title" : "I2 Which vocabularies do you use for your data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "9ae04904-e110-4dd7-b976-c38099a05abc",
            "parentUuid" : "404e67a8-56cc-428c-b974-4572deabe36a",
            "entityUuid" : "798f3437-f997-4fb4-a41d-073e96f3c024",
            "title" : "I3 Which models, schemas do you use for your data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "fefa41ff-8622-47fd-84cb-56addf214c27",
            "parentUuid" : "885820c7-2605-4b60-90fe-e9f55fae6e9e",
            "entityUuid" : "404e67a8-56cc-428c-b974-4572deabe36a",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : true,
                "value" : [ 
                    "950facc9-7730-4b43-90fb-fdf8048d861e", 
                    "77e425d2-77b3-4255-aa1e-98a5e0498ac1", 
                    "798f3437-f997-4fb4-a41d-073e96f3c024", 
                    "b02fe5a2-8fef-46a7-9559-da3241de9c3e"
                ]
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "602df8f2-f419-4683-963f-b71c85fd0b8e",
            "parentUuid" : "c42f747e-c663-48f8-b357-923d0735a791",
            "entityUuid" : "0578fe92-a3cd-4b61-a144-0ed72c4cae5f"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "86ce48ed-a7bc-4c9e-a89c-39cceb707c17",
            "parentUuid" : "c42f747e-c663-48f8-b357-923d0735a791",
            "entityUuid" : "c7f35b12-5190-4ed2-9fba-22579d19735b"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "56443ec6-1308-49df-a1d6-860ba11eddab",
            "parentUuid" : "37ce8256-a368-4b34-8545-2b5c12a5ce44",
            "entityUuid" : "48891062-bb50-4db5-b681-e369750e7484",
            "title" : {
                "changed" : true,
                "value" : "A2 Which metadata longevity plan do you use?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "eed94cf2-5bd4-4a85-ac67-9754eabffae9",
            "parentUuid" : "37ce8256-a368-4b34-8545-2b5c12a5ce44",
            "entityUuid" : "c6e33cdc-81f4-4ab3-a537-a48199c60c7e",
            "title" : {
                "changed" : true,
                "value" : "A1.2 Which authorization procedure do you use?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "528104aa-97e5-4c39-8916-b0dde23715aa",
            "parentUuid" : "37ce8256-a368-4b34-8545-2b5c12a5ce44",
            "entityUuid" : "a8a5be3a-abf8-4f0e-a700-4d5d8ac9f3d2",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which standardized communication protocol are you using?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "6892ba5b-6ee0-4599-8063-a349b0dcae19",
            "parentUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0",
            "entityUuid" : "1aa8b203-efe0-4ef7-9bde-de2b9d6a7146",
            "title" : {
                "changed" : true,
                "value" : "F2 Which (meta)data schema(s) are you using for your data findability?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "54719866-69ee-4c18-8438-fecaa6d5a53a",
            "parentUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0",
            "entityUuid" : "1aa8b203-efe0-4ef7-9bde-de2b9d6a7146",
            "title" : {
                "changed" : true,
                "value" : "F2 Which (meta)data schema(s) are you using for your (meta)data findability?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "75ad9a00-495f-4a9d-aef3-e1e3a268f06a",
            "parentUuid" : "a9bb60e4-722f-4afc-a5cd-ca5f174f30f0",
            "entityUuid" : "1aa8b203-efe0-4ef7-9bde-de2b9d6a7146",
            "title" : {
                "changed" : true,
                "value" : "F2 Which (meta)data schema(s) are you using for findability?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddIntegrationEvent",
            "uuid" : "4bc64059-6c23-4749-b379-6eba664c7ebe",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "id" : "fairsharing",
            "name" : "FAIRsharing",
            "props" : [ 
                "registry"
            ],
            "logo" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAAoCAYAAABjEBEWAAAABGdBTUEAALGPC/xhBQAAEixJREFUeAHtnQl8VNW9x++ZSUIUkcUFlSQgWjcEnoKGgEJQnoqoyJJYpZanoriWh/pqba2fiNZq+6hrW+tKLSqEVVG0igI+dnDBpXV5bAlBWQUJhiQz977vbzJ3vJnMTHYTXuf/+fxy79n+59xzf+d//ufcOzfGSkpT9MCPUNITlIHXm0JhUkfsHkgZUrirfSDVmNjJsWNPyOyw78m+pjJ2alVs7kIn3dq9O12hRSM67k6UNzqNsimUPUTxCy/tsMcY48TIE9EfnaZwpS8QXHLJ4aWxysbK38i4iyk/GZSAjEbqaoni2VQ6DXwFhoFvQKuUlL1W6U6nwvHXp3Vr15VeSf6picqUbSuaD8sGK0/2rM3nrByVsTBRfm9a2Y7iYY7tzFVcv1cqjuKw1Zuu87Jtxfc5lnNbdLw3nF1YbGcXFn1lOdZqyzKzOrXLmPH6habcmyd5HuqBa/nbLYwLOL4EWqX4mqNVOTNLTnPJKv1OMHhrc9RTu07H5zhOF4h9qWPZf9tVWvTP7MJNZ9Ve7l8uxztcsWaxvYDB3XolxXGskDuAUzDJ50ut08iyD26zJdEl2U4gRFAUb6UXOmPdhg0oLDlxaX6XzxOVa0gadWxMMSmyCtXEtuw0xzA9O043SDuSdgzhWo/FRXiz36ySf18xqsvSagX+tQMvcvnLgAi7szV3RQpE5X5CKct8vXz0MZ81trE5hcVdgrZ9mfT4/GZs0LaepIasgBWcSNT1jdUfXZ7xVpFgIHwczv9nWVYu81Uutr0VDD533RqnR21+eHRd/8/DGw+E62tyl8Bx7J9x4akMgU+Wj876O8ulx0IdYayf5s7bcnhLdcrK/K5LfMZ3teqHtD/6aGNRDavcUm1L1lv3HmhSwuYWbjvENtZ1qt7nM4/o2M4c8hTTcCkkOajsu8ANimspWZGXOZu2bFb9ju07N047jiH+N2AF0KpZ+ReCJ0B/EEtCblVUQlfCBWAxWA++BFpI/gq0BXWRXDI9DFaCjaAYuG3pzXki+QmJmjG9rs+JhGVAVgFdoyu6LuUV0t1Iz7FfOE3pHcPxnThOAG+BL8BGoC29BwBuYJ3kKHLdDZYAXdtG8D/gTqA0STegeoWTUvjTZFJmlV2D697BMmYnlvUFKV6Q32nPmdM3PcfpLdDkpqHznd+15EqdBdiHtCWDRZiIGS2DiHgDRN+0LsTlgvFAN+g8kEjGkfhHkBaV6XjCw4HSRSgvmQhGZCBnD4HTIzHfn2jbLBdcC1SHZrRYImKJoNvCifR/iPyukRJpXTmYE+WVuOlVoaq/3nQ/UUPAdCDSekWD9AKgtl0PZoB4ojy6xujBKx1aGN8BtBuldY/btvRYjSO9/pJXGNoa04izfMb6y/L8zDJXS0qarK2xHUberr3FY9z4ljmG948dqyKq/iMJvwxEVlnCM8ChIBPoBv0O7AYifCK5gsSnQCXQTVXHjwW/Be6isxvnSmsHokV1vgJE1o1AhDwFKG8WuBAsAbp3ImFoRuOYSDQ4Hg1nmMNxEnghHK7vQe16HXQA6qe7gIhVADQTSDqB50F3BWKI8j8JRNYt4AbQF2iQ5YDbgQ3UVpE3IimRs0aeFFklI7QKR02lPy008iMal43IWsd+6DzSh0PaiSQ8G0n8wU+c3qrS+Mz6qKpFhPbgKzAaBIFEK+fN4G1wLxBR4snBJDwEPgCXA5egnIbkHv4+DGR9uoBfgF8Br3xL4L+ACPo48A6sUsKaOkUYzQTngweBBghdG1MOIvYPYC24CqhtjZEnKFwENAiWRymaRPg28Huggf/fYCTwisg8ORyh6xgDvgmHdVgRxjSOs8EjICKRbS3I1PvMmUWXRlLinKSlO4uXXNTVW0FVTsdWQ0WEmUuHZ2nUVBOfZR4KWs5w+vXUnJlF52tBVi3DDxDgAUY/J2gzqEL39r2oKkNP1ogrAy5Zo7JYIkwikYVQ3wwBu2JkLCduAhgMTgS5IJaIgLXJ3WQQYWXpuoN1IJaI+LJWlwARrbGSiYIzwQcxFKljRdJzwFCQC6KlgIgjwE7wU6D+iiUlRGpQfOxN9GlbSxH4duOtoDOnNlSW+9XR1SRnRkl/yvdTpM8xsiA1BBdhsbGs95Vg29atNTI0c0T2y1s7s501jS0CmmG+GDo6c15Ule4N0M2X5SNfg0RWOBZZXWWymK5vd5Ib2YDjJ54yJ3vOY53eQ2RTkFW6NZjcvlI4lkwNR2oAy9XyimtxHyByhzchxvmXxMl1iEjEwrJ6ppOdvZGUOCcQUlaimthOMGRducXLIeaqaonegPE/zGOv59kxOK//7KJTl43M8na6N2eTnJ87e/Nh+2372IBtRjn7y29BaVvaWOG3zIQCY2R1vLKSwLtgIPgt0Oh/FswB8awXSTXktRoxNSP+GY7S9KgpW1Y9nhxFggZR9OJE+WVsNLDaKJBAmnI2ezNBPW6Se30KZ4Bt4YTDOHYJn2vqr4vovujehcTz4MC6a0V+1z+7CXU9njVrU/eKgBVyJZj2q/kb0Tp6d+8y7cP1RQ/SzUcHK0NW9uroPA0IH589fdOeGuWMSd1bGRQZkNAkwuaFKTU+54rlozPfqIqv9jdASKNffZAHTgbyxQRZlClAo30/iJaqCqoWWuujE2OEv/XExbLkskoyAteDQz15G3Kquv7RkIJxyqyOE++Njnd9nTyZ6tqmzzxlrEYvuiDrf0IIn5TiFozOnh7fD167rhjSWPt1dx3jjGHf9peL8o/82tug+p/zvkCsm6rHdx5hX/h+45jJ+M6Jpmv5VfngdCALOxrIIpwWBtcainufo1dc0smSiPiNEfl3IkUWkK7FQIs+LwkIhkRbQ7qHbv1VsdX/xhpg1XPUL1Rjhq1Hce8MfjTlEt0LV+1R7omOjSLsWa9u6lixz2Alq8gBR7jB1YnirSx07iY7VlqZtf8m4n5dI089IrCaJdyuGpYaS2pLjROwCqmyI37zvlWXZdalg1RMhBQmgmwwHlwJjgUvg97Aq8u9KqIbLX9Cg8i6BlwEtoJ4MpaE2ggbr2xLxG+nUpG2HVAffgpqk17eDI0ibOV3upFOW021DPJnvIoTnjtOthZpLH9u4N2D+717tgnLxUhkkOxblZ8V16/qV1h0Kz7zc7SzoH/h5vnL8jM+jKEmXpSIKF9LmAleBfLJhoBC0BwyOKz0do6JyCp3J7U5GtCMOoPoXgBGgJvBSyDRYNc1XgMi0mDC8vJIKlM8znDoda8pK/IzNV3WSSBpz6DjfMSK/TBaO5ZCT9SpYAMyrcjPmnJmYdFl1HVBwLKn8qStTwOftGkx9QU4AWjUNwdhdYM6AonXglfFVP87jqBL2EQuQfVSLR+6myZcDHLABPAwiCf3kXCcNzHke3oj6nr+4Yaiy7GSx+CUOo7PPFrXcsqHRf2YafxtnTNvT8QCNmuHp6f5r8N33gtpe/Ck7TeqN4ZMIi43RrwbJXLIv5RoamsOKUPp52HFuFdxZQApupmuNGv/uZU00fET9DwU1qXjs8C7GFOS1g2vgFvBUyAiDSassY2UwTtn/srRmV9GNNb5xB9utHNCzqwi+WrNJu9e2qWYBdfPVQEWfSIWflBUZZrm7wTvgLlA7WkLXDmFkzlA1u9bIPegueTpsOK7OGpPVzdPoq2rnuAR8BbYB5p6QYXKH0RkZWeHa7qK4w4gDr0BNoLNQFZYbuYfQEQaRNicGZvPxbr2lhbjT2jSIxVFn6zM6zIftoesiRMmf3Sepgxj1f+Cr70Iyvpsx54y4OXt7Tz61UFaAGpBMBzMA6VA07KI8SkYBkSQS0AJaC7RQJ4FdG9EWrXtOyDr+xH4GVD9Q4DiJQeShVV71Y+aQcaA94Dafzw4H3QFq8EVYBxIB65UaEtoN9l3s3gpd2NrO9q2PU5lIMCqFaO6Lqgtf6x0yrIf5Zscqtty/m3AzE09IvkML6igX0grZ30fW8rCeWTxahXV50+1xtEzW3FAOgT2l02KKqQ91iygmUMWbDtoDyqBiHI/kD+1GESL+m432BOdECcsncovcAuqicK6mYL6Vo+5ZV13ArlRN4NTwT+A6pMO6YuW+rQpQOF47ZHe2tKj69Y9c/WpbCzRdb4I+gK5Wn3AaeAwcCZ4CUi+58X3DyCqUpJ/a/RAa7FcraUdNTroB4h4jDpE7k0/QF3JKpI9ELMHtBtSF3e0F/k0U4iwk0FSkj3QIj3wFLWuAZr644lchc+AyCr3ojPAC6yjaOvprBlbTggauzu/SD0Cj9DBLdxnjG/D4W3M5/MuPsZdANRRY+3Zzhp2RceyvZUZVkrl0Tyx6uDz+9l4tgPG+LenWGbT+QN7fFVQUBDPx629gmSOluiBDlT6OTgSiIxzwetgXTh8MsccoEWXrLAs7MXgLZCYsPoVwWZTMtS2g/8BO3O10a9CNYVNLsOIMdbffSblxYb++jZE0H37RzE4BjGScjhW2zSuUa+x9pFvNb/4XWb7nNnvL5yrFWdSWn8PHE4TtR8+FmhBGU/WknA1eN/NENfC8kjzMn7TglKRxqwj41xenl0aTDHrU+1gwPj8lZU2lLKcHvz4pT95ciB0X4ZMOnmX8juZ36/My3rZrSjR8fTcERfx+OEajPiF5OMNMkcNXcLKfpmDBU8zvs2sHXdJh6+8XYr97d7OlZaTYVvBHvx2TNPKObQkA+J+wQvkL/n8zour3p7zhfInpVX3gKZ5Wc+BIBO0BTvBJ0B7stoVqSY1CBt60bm8/DkIMFTEc4z/bvZMF2pbqFrJGAHtbQbLy65ljp4AebOwuB9Ylv/2VfkZ78TIbvUdOOpC2wQnMTH0Qf+nEO75NmlpU5e+NU1bOXUW2mr6Dh45gDdcf8xbYKMZRUei7zV+unvfewtnrayzomTGVt8D1QibPbO4l2U7r2E127FLevPKyzKnNuQK9DG377YV5+Em3AmZesrqWWltJq4c3nmr9OXk5h1fbgeewXoPhKTvMxbuWrN4rvyYRkteXp5/w/ZAHru3d6Jfq8xZJi311vcWzChqtPKkghbvgQhh9UKKbTmLsE47/MYM48nQ/za2dSLu/h3Fv8Bz+DUuwx4/H7Ko/OPN3Xjx70F84m98Pt+E1e/M1LcCarXe9W2LrO4ZuaN+wvFBiNve+Kw71iya+3h99STzt64eCBE2NKWOuaPU32vgLnPyGX1dS9hUTdXPYQI7tr0QXDS9l7P5Sx7n+l9q57S7cdGiKdquaFbJHjrm0MD+8kedYGCsr9spy9c8fz/+dlIO1B5IUcNl4fpcMr44MP+ZTP+bz55IVGjqboqL0mDoM3jkIHza4yx/m1L/0HHp5rie2RV+08taNOXdpqgjkQ7nqgf7plj2AHv9R5XOlo3LE+VNprX+Hoi4BH2G5LV3KgNvEdGTN7Cuxqd0n+U2+CrOGDKqu10ZfAY3I5dBMdMy6Tek3PhAVxRO5S3aEyHxM2km9d4l+cc0uX+ZM3PLSUE7cD91jGBErsGPvoa3yvROQFIO4B6IEFbXMOCSq9vt37NrGgS7kMXQX9ukWz9f9uacbfW9vuxz806pDARuw3ccgx6+gm3dvGbRnGmuHl6ibrNzbzHp1i8t4/D9b/OU46RNXpV/1AY3T0OO2jcuMsXnsuswnmu4lIv7Gv33DM3Lerqg5q9kG1JFskwL90A1wqotIX920CjeWHLuBQG+jPG4L9U8vXrBrPWJ2nreeVe2/aai9GwWWLdAlqHk5W0u30NWqv9RVuh7YpU9e9b2oysCZTfy9tR40g+nMUup829t0lJe1zusscpEx4V++bC+KBsr+mMan0fdPEFh39g4j/ks35ON+flNdF3JcMv3QA3Cuk3Kzh2ZEbDtAogwBhK34fgR1nIZ1msdVovX2Qxk5sPutumBC9Gf816QJQWFG9jsf/qg9h0eW/rKs3tdfYmO7Cak85n4yyHcTejoo7xY3RLCK3gAsYFdhS0+y9mFG8EnBfj/B47pjNXuyq7GyewvnM4WQzp7vrt5SfsVy2+mDx2V8UZB0qIm6vIDNi0uYd0rqnpcWsZvoniapM9N8gl2Nw0CQ1zna4i0AYbxLVj/vPfenfGxm96Q49mFXx1R4QsM5JNCg9CZQwOPpk799qvqRV5MJ0/FdlPndsi7lhlgjY/PR/Y6NmNp8gPFDenxA6tMrYSNvpzc3IKUirS1nYLBdLNiwYvbtMMQnac5wvr2bLlVnnZ+XsbupPVsjh4+MHT+H5c2C3Vl4aGSAAAAAElFTkSuQmCC",
            "requestMethod" : "GET",
            "requestUrl" : "${apiUrl}/search/?q=${q}&registry=${registry}",
            "requestHeaders" : {
                "Accept" : "application/json",
                "Api-Key" : "${apiKey}"
            },
            "requestBody" : "",
            "responseListField" : "results",
            "responseIdField" : "record_id",
            "responseNameField" : "name",
            "itemUrl" : "https://fairsharing.org/${id}"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "2c0d7467-f462-4e22-8b42-c87c0ad01f2a",
            "parentUuid" : "c753f289-fe95-4dac-85ff-4171d7c0aee5",
            "entityUuid" : "73055e5a-5711-4716-b51f-4ef35818b3e9",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "00e6d6ec-4360-4f0b-b838-c6b06d360d0f",
            "parentUuid" : "c753f289-fe95-4dac-85ff-4171d7c0aee5",
            "entityUuid" : "73055e5a-5711-4716-b51f-4ef35818b3e9",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "Standard"
                }
            }
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "d018faaf-63d0-461a-a1e3-f401ef7f4ff0",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "7ade9122-90f7-4458-bfab-e115cc7004a0",
            "title" : "Sample integration with comment",
            "text" : "Chapter text"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "ecbf3d5d-0b89-4a17-ae01-968d56501957",
            "parentUuid" : "7ade9122-90f7-4458-bfab-e115cc7004a0",
            "entityUuid" : "345663af-90a7-4e92-ad3b-82826287eb25",
            "title" : "Integration question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : ""
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "eb6d6b6a-383a-4c9c-9540-a5071c79b638",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "7ade9122-90f7-4458-bfab-e115cc7004a0",
            "title" : {
                "changed" : true,
                "value" : "Sample multiple answers on integration with possible comment"
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "b48f93f2-5033-43e0-a011-32690f27979a",
            "parentUuid" : "7ade9122-90f7-4458-bfab-e115cc7004a0",
            "entityUuid" : "345663af-90a7-4e92-ad3b-82826287eb25",
            "title" : {
                "changed" : true,
                "value" : "Which XY do you use?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "749f7a67-c3f5-4017-82f7-7950f623fa38",
            "parentUuid" : "345663af-90a7-4e92-ad3b-82826287eb25",
            "entityUuid" : "000c948a-d7c8-42ff-a104-72c6a314e85d",
            "title" : "Integration question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : "xy"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a7aa3130-045d-45f5-89e4-bc0529dd2ce6",
            "parentUuid" : "345663af-90a7-4e92-ad3b-82826287eb25",
            "entityUuid" : "ca829d8f-d124-41cc-a061-440006bd3139",
            "title" : "Comment",
            "text" : "If you have not found the answer in FAIRSharing, you may write it here, however, it is advisable that you create a new FAIRSharing record using here <link to FAIRSharing new record creation>.",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "bac142f6-a5e5-41cf-ab2d-9882554e177b",
            "parentUuid" : "345663af-90a7-4e92-ad3b-82826287eb25",
            "entityUuid" : "000c948a-d7c8-42ff-a104-72c6a314e85d",
            "title" : {
                "changed" : true,
                "value" : "Select your answer from FAIRSharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ed2435df-9a3d-49c2-9ec7-660dc835887b",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "32b9a32b-fc79-45a6-9c2b-540e3612032a",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "title" : {
                "changed" : true,
                "value" : "F3 What is the technology that links the persistent identifiers of your dataset to the metadata record description?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e076fb5e-84c7-4df9-a27b-aea1bd4b283c",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "8c8b9c9b-1948-444f-8601-058006732b0d",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "c4691a87-a03d-477a-b5de-7732c7951452",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "8c8b9c9b-1948-444f-8601-058006732b0d",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ee8b311e-2f96-4620-b2cf-b1eaba474c88",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "f0f7d2ec-1b34-414b-9b14-dcefa2a67c6b",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "876bbc70-8081-4dfa-9103-457a9bb52144",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "f0f7d2ec-1b34-414b-9b14-dcefa2a67c6b",
            "title" : {
                "changed" : true,
                "value" : "Add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : true,
                "value" : "StringQuestionValueType"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "4bbad59f-a854-4985-b226-94f457ff16cb",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "title" : "F1 What globally unique, persistent, resolvable identifiers do you use for datasets?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "dffdaef6-b59b-45aa-81f0-9a1c2b443528",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "d3c9ab2a-d6e4-491d-b1e5-08c1aaf3f88c",
            "title" : "Choose your answer from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : ""
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6d26bda0-48d4-4d34-8e4a-ef11ad1bea55",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "1a2c7cae-da61-490b-a179-0e5fc75430e9",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "7601bff9-2837-4981-a80b-0655ee8a06fb",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "title" : "F1 What globally unique, persistent, resolvable identifiers do you use for metadata records?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4cc98e5d-04b2-489f-95bd-14dbacaec089",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "94009727-49dc-4765-a5a9-6b8dff914cbe",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "34bcd5da-8618-42dc-9c81-2d89b06c36ab",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "94009727-49dc-4765-a5a9-6b8dff914cbe",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bb900dff-ced6-41e7-8196-5506e360a266",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "3aa30eff-8cd6-4aea-8446-759cb33e0a2c",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "7d5da2c4-749e-4782-8589-d0e045b16a49",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "c207a87b-8142-4a69-b777-9db41c5de2e8",
            "title" : "F2 Which data schema(s) are you using for findability?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "797f12b4-5d82-4788-ad79-46d75c2c1606",
            "parentUuid" : "c207a87b-8142-4a69-b777-9db41c5de2e8",
            "entityUuid" : "2ce96ebf-1b3e-4ebc-8f27-2470fee0b3d4",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "63a49fea-b1b2-4778-b76d-50873a287082",
            "parentUuid" : "c207a87b-8142-4a69-b777-9db41c5de2e8",
            "entityUuid" : "2ce96ebf-1b3e-4ebc-8f27-2470fee0b3d4",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d849d8d9-f9fc-4608-b75c-a5c914863c8d",
            "parentUuid" : "c207a87b-8142-4a69-b777-9db41c5de2e8",
            "entityUuid" : "50c38f0b-753c-42f4-9b63-fce88c010bc4",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "de6cef89-4608-4497-b65a-cd088aab4ea2",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "title" : "F2 Which metadata schema(s) are you using for findability?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "140dd729-666f-400f-879a-34e18271750a",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "d975599c-e3de-4acd-9370-0ff6537b888a",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "bf8bf5da-0d6d-4efe-9cd7-07014a4f2834",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "d975599c-e3de-4acd-9370-0ff6537b888a",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f1314555-71f6-40e1-a0f5-5055671bff1d",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "9f1492b1-6a4c-4cd4-bd6a-96ad7950fa68",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "129a578d-7df2-4394-b533-9b32272b1eb8",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "title" : "F4 In which searchable resources is your dataset indexed?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "99eaf29d-13f7-4847-926d-38900bd4a18f",
            "parentUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "entityUuid" : "3ded4b7d-fc8a-4386-b96f-34f0d681cf57",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "d61edd24-117d-45e1-a282-3abfd8ab62aa",
            "parentUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "entityUuid" : "3ded4b7d-fc8a-4386-b96f-34f0d681cf57",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fd2e184b-9b0d-48a0-9f21-1e97320d9a98",
            "parentUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "entityUuid" : "3b4a4d1c-f74f-465c-95dd-3699070b443b",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "b9d83f72-0412-4b79-b155-3b08db4d4157",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "db906633-eb98-4131-a90c-3994341720b1"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "1f3b961e-0b6c-44ea-ac32-03774ffd2ecb",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "797c4af8-0184-43cf-b40c-e2608b7b4d0a", 
                    "6a812ff5-a202-40d4-bd3b-02b341512e48", 
                    "808310c5-7321-4789-aa97-80f4c7ac9fa8", 
                    "c207a87b-8142-4a69-b777-9db41c5de2e8", 
                    "faeab073-3569-4bca-a804-c81c0de04a95", 
                    "a8dd2bd9-ddbe-46b7-948b-fb6e3af4ea44", 
                    "5f33c2e8-8b95-435c-870a-fd97d91ff8da"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "d16e9f20-602f-4a6f-80b0-8512355132c6",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "title" : {
                "changed" : true,
                "value" : "F3 What is the technology that links the persistent identifiers of your data to the metadata description?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "bade6457-00cd-4825-8ab5-f44612483655",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "a8dd2bd9-ddbe-46b7-948b-fb6e3af4ea44"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "5be84135-5f6d-441e-b1db-98be51f0c868",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "title" : "F4 In which searchable resources is your dataset indexed?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a4066f34-8704-44ab-8b9f-04a0efbd98f5",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "8509fe0d-2225-4230-8c71-991033389df3",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "c40190a3-5ff8-4d4f-9ce4-541d0a6c9ced",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "8509fe0d-2225-4230-8c71-991033389df3",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d404c872-6f1f-466c-91d9-bd8a5f45060c",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "7f882a17-8349-4076-8ab1-83528abe9ce9",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "a9f32bf0-3513-43ef-a097-1140cdc5ad98",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "title" : {
                "changed" : true,
                "value" : "F4 In which searchable resources is your metadata record indexed?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "368db9f4-de1b-4201-b719-df49dd992397",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "6a812ff5-a202-40d4-bd3b-02b341512e48", 
                    "797c4af8-0184-43cf-b40c-e2608b7b4d0a", 
                    "808310c5-7321-4789-aa97-80f4c7ac9fa8", 
                    "c207a87b-8142-4a69-b777-9db41c5de2e8", 
                    "faeab073-3569-4bca-a804-c81c0de04a95", 
                    "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a", 
                    "5f33c2e8-8b95-435c-870a-fd97d91ff8da"
                ]
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "d79c5ffc-cde6-4e58-a63f-29e73a3e680e",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "title" : "A1.1 Which standardized communication protocol are you using for your metadata records?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "fa6bd91d-7274-476e-8a95-86e4f75b094a",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "af78f22d-4a21-46d4-8c75-2a102b4c7208",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "4647570a-c7c5-44f9-a86d-40bdba33f8a2",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "af78f22d-4a21-46d4-8c75-2a102b4c7208",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4f52a370-6d22-4851-8578-1ac4e530c205",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "447e7f37-1452-4928-b94a-e913a4b8be31",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "7bc91f9e-f553-4347-9843-a391bf076950",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "447e7f37-1452-4928-b94a-e913a4b8be31",
            "title" : {
                "changed" : true,
                "value" : "Add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : true,
                "value" : "StringQuestionValueType"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "e5289bca-a0e5-4ca5-aaa1-bccb3fdb1e35",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "title" : "A1.2 Which authorization procedure do you use?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "37aa2433-e916-4622-8532-9ccb83b77200",
            "parentUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "entityUuid" : "50862721-9c0a-462b-acba-081c3e4eed73",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "11483eee-02e1-40e0-bd96-99164f2ef7ae",
            "parentUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "entityUuid" : "50862721-9c0a-462b-acba-081c3e4eed73",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6881e277-96b6-4fd4-81e0-3239ef3f5efe",
            "parentUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "entityUuid" : "8d786555-4de3-435a-9a27-9eaf8bf92e8c",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "d9f807a9-a620-40eb-aa8f-3c11889271c0",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "title" : {
                "changed" : true,
                "value" : "A1.2 Which authorization procedure do you use for datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "5c51833b-fd6a-43f2-960c-9bd71205ea70",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which standardized communication protocol are you using for metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "2657ee1c-665e-4f92-a756-534db7d3f379",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "title" : {
                "changed" : true,
                "value" : "F4 In which searchable resources are your metadata records indexed?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "84a56cd0-922b-4fe4-87b2-52efc7153ba0",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "title" : {
                "changed" : true,
                "value" : "F4 In which searchable resources are your datasets indexed?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "5cae355c-785a-4e7a-92f8-16cf034e248a",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "title" : {
                "changed" : true,
                "value" : "A1.2 Which authorization procedure are you using for datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "61586e86-e3af-43fd-bcff-199bc772066d",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "title" : "A1.1 Which standardized communication protocol are you using for datasets?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "72af7323-7f5b-4188-8115-3cb7a5e36535",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "22185a96-a575-46fb-a8c7-98b893569cb3",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "58e9c528-3b70-4660-ab7f-5f127aed251f",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "22185a96-a575-46fb-a8c7-98b893569cb3",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "e905ab45-9fce-4b6e-a7d7-7a9604589c06",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "targetUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "98140585-04a4-4f8b-b8e8-4f818215582f",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "8c18f95d-7c33-4269-8d0d-ed0de211ff3e", 
                    "43ff12a0-22ff-492b-9777-99e2469f5cf1", 
                    "ee073efa-c934-4db4-ae87-49b73df11ca5", 
                    "d2c28334-7dc9-4804-9f0c-89984240fb3b"
                ]
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "af5586fe-f5e1-42a3-ba7a-f888f22ca73a",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "917584f1-b3b8-49d4-80fe-eae9cc17b306",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "e982f1d9-b621-4332-ae0a-2977102b58a5",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "917584f1-b3b8-49d4-80fe-eae9cc17b306",
            "title" : {
                "changed" : true,
                "value" : "Add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "ea1d2101-59b2-40ea-adcf-6fffd764eca1",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "title" : "A1.2 Which authorization procedure are you using for metadata records?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "69cc1295-ddb9-48c4-850a-12bfbd60f5d8",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "c2dcc1b6-8535-4e74-8888-b0b777f9eda8",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "58c1611a-73c5-4abd-b25b-517304824578",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "c2dcc1b6-8535-4e74-8888-b0b777f9eda8",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "223e126d-310e-438e-9915-94c98e14a7a3",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "479343c8-4f14-49e3-9d3e-a060dd8da314",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a778c0b9-5bcc-42fc-8983-dee82e566ba6",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "479343c8-4f14-49e3-9d3e-a060dd8da314",
            "title" : {
                "changed" : true,
                "value" : "Add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : true,
                "value" : "StringQuestionValueType"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "9dd14e48-c388-412a-bcaa-812e3773f6c4",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "title" : "A2 Which metadata longevity plan do you use?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "d13f45d6-ab33-4197-8943-f50a50c09601",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "37c8af6d-830a-4146-95d6-8f1f57ba9dc7",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "e0b8efd4-3519-4c76-a619-ab483d52851f",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "37c8af6d-830a-4146-95d6-8f1f57ba9dc7",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0f7f99ac-2bb8-4a8b-b0bc-c14fb5693d7e",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "572af6fd-f346-40d6-872f-bab23b2d6a2b",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "27c5737a-019e-42c6-ba2d-3f99586ed330",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "8c18f95d-7c33-4269-8d0d-ed0de211ff3e"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "b3880023-0536-4a37-a2ac-5d43df57596e",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "43ff12a0-22ff-492b-9777-99e2469f5cf1", 
                    "ee073efa-c934-4db4-ae87-49b73df11ca5", 
                    "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2", 
                    "d2c28334-7dc9-4804-9f0c-89984240fb3b", 
                    "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb"
                ]
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f9f71526-4955-4adc-b37a-96750f853d9b",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "title" : "I1 Which knowledge representation languages (allowing machine-interoperation) do you use for metadata records?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "39883fab-9c40-47fe-b963-367f79827a61",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddReferenceEvent",
            "referenceType" : "URLReference",
            "uuid" : "4d6710fa-47aa-415c-8358-08945eb98f05",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "ac3e3131-4c3a-4b1f-94a8-e48eafc4b4c4",
            "url" : "http://example.com",
            "label" : "See also"
        }, 
        {
            "eventType" : "DeleteReferenceEvent",
            "uuid" : "6114c6bc-6b61-43f0-a9cc-4c3402aabf2b",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "ac3e3131-4c3a-4b1f-94a8-e48eafc4b4c4"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "a9e9ee0a-07ac-4b3c-afa5-a1ed4b1f33c9",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "b05cbdda-1636-4c38-86c6-5b4820950e11",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : ""
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "c1e2d9e5-7c0e-4879-8ed6-b28edde57748",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "b05cbdda-1636-4c38-86c6-5b4820950e11",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "fc6f2ff7-077d-4450-b10d-7cd4bc275b92",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "da04a5df-f0de-4ccf-8750-214fc4330f13",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "44165369-6780-4342-ab4c-41d7c39c0ca5",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "da04a5df-f0de-4ccf-8750-214fc4330f13",
            "title" : {
                "changed" : true,
                "value" : "Add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : true,
                "value" : "StringQuestionValueType"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "93f2def6-679a-4743-8ee2-b2a776e44efb",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "title" : "I1 Which knowledge representation languages (allowing machine-interoperation) do you use for datasets?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "19c154c4-0ed4-4803-a526-4d67c6ef1082",
            "parentUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "entityUuid" : "fdf09d4f-e80d-4a3d-80a6-7815a756e0c1",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "92c88ac8-80c6-42d1-862a-90a1023602e3",
            "parentUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "entityUuid" : "68718ac7-b88a-47ce-86e6-5827e7834b89",
            "title" : "Choose your answer from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : ""
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "894a339f-cbb5-4c87-b847-2c1bb436bfac",
            "parentUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "entityUuid" : "6838d085-c55a-42c6-897e-c58dd414d211",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bab97a6e-8608-4487-9bca-b716a7d21b9d",
            "parentUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "entityUuid" : "6838d085-c55a-42c6-897e-c58dd414d211",
            "title" : {
                "changed" : true,
                "value" : "Add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : true,
                "value" : "StringQuestionValueType"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "dfa07cd0-3afc-493e-9f59-1c3a8d70d230",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "title" : "I2 Which vocabularies do you use for your metadata records?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "e6d134fd-5bd3-4bab-89f0-6d8f04677bf3",
            "parentUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "entityUuid" : "48476982-e866-4feb-94f8-5b2b5d423c61",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : ""
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "2c4df94e-6d35-47e8-828d-60784104fbc3",
            "parentUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "entityUuid" : "48476982-e866-4feb-94f8-5b2b5d423c61",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "e0022c1e-1b3e-4f08-919f-e137d8d0a534",
            "parentUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "entityUuid" : "19a278a0-88b5-4cde-9191-d58f2739eb34",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "b9136c80-8ec5-4119-bfee-546e00b734de",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "b3a1896d-1151-40f1-92f1-f214bc2dd1eb",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "title" : {
                "changed" : true,
                "value" : "I2 Which vocabularies do you use for your datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f4517c72-54c3-46f7-8fb6-9183f2e1175d",
            "parentUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "entityUuid" : "9f02dcd1-fed5-481d-bea5-577303523853",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "b634268b-45f3-41a4-8237-f7d143d1e2e3",
            "parentUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "entityUuid" : "9f02dcd1-fed5-481d-bea5-577303523853",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "60481c07-3253-4058-a561-387b45ee4165",
            "parentUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "entityUuid" : "96d6377e-02e8-4ef3-bbd1-e8849a139f8c",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f940a5dc-124e-4fcb-95cf-6ec91d1a1577",
            "parentUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "entityUuid" : "96d6377e-02e8-4ef3-bbd1-e8849a139f8c",
            "title" : {
                "changed" : true,
                "value" : "Add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "be7cf0e9-2d36-442e-86b0-c4615102267b",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "title" : "I3 Which models, schema(s) do you use for your metadata records?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "99c59ace-9072-4a6d-86ae-08d6cd7d025f",
            "parentUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "entityUuid" : "ae187e7b-b7f6-447a-beae-35c7e1402cbc",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "17f78ad0-4552-4bcc-9e5e-bcd5b7cd1331",
            "parentUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "entityUuid" : "ae187e7b-b7f6-447a-beae-35c7e1402cbc",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b5fb8756-031e-4ed6-9689-feead51588be",
            "parentUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "entityUuid" : "d278b705-fcce-4d67-84c4-13a9521e0753",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "6f420997-be07-40d5-a4c8-9c6fc89edb3e",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "title" : "I3 Which models, schema(s) do you use for your datasets?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d2b5eb28-31b5-47ef-8fda-bbc5c5e50f69",
            "parentUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "entityUuid" : "38a47f4a-1544-4867-b2f3-abbf4b12b20e",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "f82b0b4f-0a84-45a2-bf8c-e57f05c09aa2",
            "parentUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "entityUuid" : "38a47f4a-1544-4867-b2f3-abbf4b12b20e",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "0a433e4f-c20b-4b2d-8985-3f224a6c07de",
            "parentUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "entityUuid" : "0def1fb7-c687-4671-b214-ef19f7cc0328",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "3a988885-c5c9-47f4-a075-c216126c1c16",
            "parentUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "entityUuid" : "0def1fb7-c687-4671-b214-ef19f7cc0328",
            "title" : {
                "changed" : true,
                "value" : "Add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : true,
                "value" : "StringQuestionValueType"
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "c2b9da42-9f66-41c4-945d-f31f2985cf84",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "885820c7-2605-4b60-90fe-e9f55fae6e9e"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "627a6b18-c5d7-46af-9cff-9ca2ea956f89",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "title" : "Which license do you use for your (meta)data?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d4a67fd5-2cd0-40ab-b9f1-5b23442df4a7",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "0fbd6fd5-6290-450a-b617-0e0d4e7fd78e",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "3c2242f6-b7d5-4ce9-b0d2-8365c0184a4b",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "0fbd6fd5-6290-450a-b617-0e0d4e7fd78e",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bc61e53d-677f-4557-9c20-572868338425",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "de8a1eec-3cf5-41b9-8cae-af2fc67fbe2e",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "f2edd75a-d771-4395-bd3f-66129b8d99b1",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "title" : {
                "changed" : true,
                "value" : "Which license do you use for your metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "bed88994-89dc-4221-8f40-b19ba1fc8f19",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "title" : "Which license do you use for your metadata records?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "458e5fd0-7069-476a-9878-95ff4692c929",
            "parentUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "entityUuid" : "778f8ae8-1d6d-4daa-babc-6e2174455232",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "e07a6bc1-704f-458e-9f71-1db1c90fefae",
            "parentUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "entityUuid" : "778f8ae8-1d6d-4daa-babc-6e2174455232",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1a5d163d-551d-4320-8f78-b0c096a3449c",
            "parentUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "entityUuid" : "d7fc5fb5-4bde-4b6e-a940-b056048c272c",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "31b71655-0016-4d59-ada4-32b22a18e305",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "title" : {
                "changed" : true,
                "value" : "Which license do you use for your datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "8b24e832-e55c-4b8f-a00c-1e0e0d31b5fb",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "title" : "Which metadata schema are you using describing the provenance of your metadata records?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c5f2a109-6162-4739-b839-1e61e8597ce2",
            "parentUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "entityUuid" : "4f344af5-84ef-4613-bbeb-4509b949ca62",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "7d33fa5c-c4aa-4194-8e90-5cacccd9db7b",
            "parentUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "entityUuid" : "4f344af5-84ef-4613-bbeb-4509b949ca62",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9ef3643b-3626-40f0-bd60-31aabaf697c1",
            "parentUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "entityUuid" : "598d5fda-7580-468f-8a68-ba0b7e9ebc19",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "0474b553-a68c-42d4-a846-e41ad9a45bb8",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "title" : "Which metadata schema are you using describing the provenance of your metadata records?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d5a81a8d-418c-473b-9f62-61883cb8d026",
            "parentUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "entityUuid" : "c358894e-a82a-4536-8c5d-cbc4183d82c2",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "6a127699-f00e-4639-95c6-c8cdaa83f95c",
            "parentUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "entityUuid" : "c358894e-a82a-4536-8c5d-cbc4183d82c2",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6f0bfb27-9f8b-491a-8fba-efc66560b531",
            "parentUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "entityUuid" : "afa03886-359a-4f1d-bcbd-5038edde1d9d",
            "title" : "Add your resource description here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "b1336470-b308-4d50-8a8a-d0ad55f9fbbd",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "920a584e-8579-49b3-a1ab-d8d00ae1a86b"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "febdfff2-76a1-44db-8d1d-820f4945be2a",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "title" : {
                "changed" : true,
                "value" : "Which metadata schema are you using describing the provenance of your datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteChapterEvent",
            "uuid" : "173a9258-402c-49ce-8263-726ac71f6bd3",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "7ade9122-90f7-4458-bfab-e115cc7004a0"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "3f3aac10-e5f5-49c2-9b0b-5476cd8362b7",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "c207a87b-8142-4a69-b777-9db41c5de2e8"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "87728781-34c0-41a0-9e93-1f9b7a4d2543",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "The FAIR Principles articulate the behaviors expected from digital artifacts that are Findable, Accessible, Interoperable and Reusable by machines and by people. Although by now widely accepted, the FAIR Principles by design do not explicitly consider actual implementation choices enabling FAIR behaviors. As different communities have their own, often well-established implementation preferences and priorities for data reuse, coordinating a broadly accepted, widely used FAIR implementation approach remains a global challenge. In an effort to accelerate broad community convergence on FAIR implementation options, the GO FAIR community has launched the development of the FAIR Convergence Matrix. The Matrix is a platform that compiles for any community of practice, an inventory of their self-declared FAIR implementation choices and challenges. The Convergence Matrix is itself a FAIR resource, openly available, and encourages voluntary participation by any self-identified community of practice (not only the GO FAIR Implementation Networks). Based on patterns of use and reuse of existing resources, the Convergence Matrix supports the transparent derivation of strategies that optimally coordinate convergence on standards and technologies in the emerging Internet of FAIR Data and Services. For communities adopting FAIR practices, the collection of their implementation choices compose their FAIR Implementation Profile (FIP). The FIPs of numerous communities can be systematically acquired from the FAIR Convergence Matrix and used as the basis to optimize the reuse of existing resources and interoperation within and between domains. \nParticipating in this survey will help to vastly accelerate the well-informed implementation of FAIR among many tangential and other domains."
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d66bc69e-a449-432c-9cae-1d86d72b514c",
            "parentUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "entityUuid" : "8cfa41ae-3ecb-461e-acb8-aae44592e82a",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "79773508-34eb-48a0-877a-4147aca6bd4d",
            "parentUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "entityUuid" : "8cfa41ae-3ecb-461e-acb8-aae44592e82a"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "eebea9e1-f127-4773-8081-48b57fba1e42",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "The FAIR Principles articulate the behaviors expected from digital artifacts that are Findable, Accessible, Interoperable and Reusable by machines and by people. Although by now widely accepted, the FAIR Principles by design do not explicitly consider actual implementation choices enabling FAIR behaviors. As different communities have their own, often well-established implementation preferences and priorities for data reuse, coordinating a broadly accepted, widely used FAIR implementation approach remains a global challenge. In an effort to accelerate broad community convergence on FAIR implementation options, the GO FAIR community has launched the development of the FAIR Convergence Matrix. The Matrix is a platform that compiles for any community of practice, an inventory of their self-declared FAIR implementation choices and challenges. The Convergence Matrix is itself a FAIR resource, openly available, and encourages voluntary participation by any self-identified community of practice (not only the GO FAIR Implementation Networks). For communities adopting FAIR practices, the collection of their implementation choices compose their FAIR Implementation Profile (FIP). The FIPs of numerous communities can be systematically acquired from the FAIR Convergence Matrix and used as the basis to optimize the reuse of existing resources and interoperation within and between domains. \nParticipating in this survey will help to vastly accelerate the well-informed implementation of FAIR among many tangential and other domains."
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5c88cfba-5394-411f-98ca-7356ceec7bf0",
            "parentUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "entityUuid" : "4b04b65d-c4df-4619-b379-cd6906b9fc5c",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "ebdc32d6-e9b7-422d-8863-8d87423f9649",
            "parentUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "entityUuid" : "4b04b65d-c4df-4619-b379-cd6906b9fc5c"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "3908c4a2-5e12-4b65-97f4-902793f0c1c3",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "91d90ad4-4aa3-4536-8c25-66bd14893fa6",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please, indicate the research domain your infrastructure/repository/institute is mainly working in using FAIRsharing. "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }
    ],
    "createdAt" : ISODate("2020-02-09T15:31:56.653Z")
},

{
    "id" : "gofair:fip-wizard:1.0.0",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "1.0.0",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting communities to explicitly declare their FAIR Implementation Profiles",
    "readme" : "# FAIR Convergence Matrix Questionnaire\n\nFAIR Convergence Matrix questionnaire prompting communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [GO FAIR project website](https://www.go-fair.org/today/fair-matrix/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FAIR Matrix instance](https://fair-matrix.ds-wizard.org)** to share them with the community and also please report potential issues and other comments there.\n\n- v 1.0.0\ndodsffhefherfh \n",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "a8ecd9a2-1b5b-47c6-8151-4daeaf4ce3ce",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "title" : {
                "changed" : true,
                "value" : "General Information about Survey and other"
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-07-19T14:32:45.692Z")
},

{
    "id" : "gofair:fip-wizard:1.1.0",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "1.1.0",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting communities to explicitly declare their FAIR Implementation Profiles",
    "readme" : "# FAIR Convergence Matrix Questionnaire\n\nFAIR Convergence Matrix questionnaire prompting communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [GO FAIR project website](https://www.go-fair.org/today/fair-matrix/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FAIR Matrix instance](https://fair-matrix.ds-wizard.org)** to share them with the community and also please report potential issues and other comments there.\n\n- v 1.1.0\nSome important changes \n\n- v 1.0.0\ndodsffhefherfh \n",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:1.0.0",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d59ed452-8dd2-4986-87d7-eaf8204a6519",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : true,
                "value" : "StringQuestionValueType"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d0b5f9b3-ee32-4c84-99b7-325cf7e6423c",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "f5410831-0e1b-4c76-8a27-1dcc1a6d5904",
            "title" : "What is your degree",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "81354269-b857-4d25-b70a-99cbcd68e8e1",
            "parentUuid" : "f5410831-0e1b-4c76-8a27-1dcc1a6d5904",
            "entityUuid" : "3fccd7d5-7d17-437c-8a30-d1b4fbffb2ec",
            "label" : "Bc",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1c9f1e00-edd0-42fd-8071-f01b6009d56b",
            "parentUuid" : "f5410831-0e1b-4c76-8a27-1dcc1a6d5904",
            "entityUuid" : "8e1ab94c-c861-4a94-b512-74b9712d2ced",
            "label" : "MSc",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e206ac43-d468-4d15-b6b6-07651f6d31d0",
            "parentUuid" : "f5410831-0e1b-4c76-8a27-1dcc1a6d5904",
            "entityUuid" : "54935518-d1e4-452b-bd07-a1875f90dfcc",
            "label" : "PhD",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "f81fa6ce-97f5-4e2a-a230-9421580c74b0",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "3852df8a-faae-4638-8031-1ede6821fd73"
        }
    ],
    "createdAt" : ISODate("2020-07-19T14:38:28.440Z")
},

{
    "id" : "gofair:fip-wizard:4.0.0",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.0.0",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditKnowledgeModelEvent",
            "uuid" : "dd38ffdd-1eea-4a72-90eb-ab8aa04d71cc",
            "parentUuid" : "00000000-0000-0000-0000-000000000000",
            "entityUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "name" : {
                "changed" : true,
                "value" : "FIP Wizard"
            },
            "chapterUuids" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "integrationUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "af2c2068-d193-4846-9382-e5d7a07731dd",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "title" : {
                "changed" : true,
                "value" : "Background: The FAIR Implementation Profile "
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "7d91423a-01d0-40f5-b7c0-8202d4d15413",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : true,
                "value" : "FAIR Implementation Community "
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "088d894b-ea39-407b-94eb-b5fcc8e7d67d",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "bfe229e5-4e8d-428f-a788-d0f5b42d5b82", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "90ce1956-5538-466b-837a-0951d3c578fb"
                ]
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "1020c7e9-8840-40aa-9234-41dad10d899a",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "daf3b0f2-8205-48d3-87b0-b1b61edb27f7",
            "title" : "Does your FIC have already a GUPRI?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9f590ab9-7c1b-4689-9b43-be0c17553c66",
            "parentUuid" : "daf3b0f2-8205-48d3-87b0-b1b61edb27f7",
            "entityUuid" : "5ea2b2ca-ad39-4eac-9228-8b8360d615c2",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "5463fc20-7791-4e4d-a99f-daf751669fab",
            "parentUuid" : "daf3b0f2-8205-48d3-87b0-b1b61edb27f7",
            "entityUuid" : "5ea2b2ca-ad39-4eac-9228-8b8360d615c2",
            "label" : {
                "changed" : true,
                "value" : "Yes"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0759fec9-601e-4456-96d0-d997ad9f3c67",
            "parentUuid" : "5ea2b2ca-ad39-4eac-9228-8b8360d615c2",
            "entityUuid" : "770e7b1c-7f3d-4431-a82e-329d4eeec1f6",
            "title" : "Link your FIC GUPRI here. ",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "174d344a-0aec-4139-91b1-d5cf4bbaf3ba",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "daf3b0f2-8205-48d3-87b0-b1b61edb27f7", 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "bfe229e5-4e8d-428f-a788-d0f5b42d5b82", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "90ce1956-5538-466b-837a-0951d3c578fb"
                ]
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4102544b-2c9f-464c-a3e0-03b286dc6b6e",
            "parentUuid" : "daf3b0f2-8205-48d3-87b0-b1b61edb27f7",
            "entityUuid" : "4e7eaa09-121b-4827-b157-8adb7c7ce516",
            "label" : "No, then complete a new FIC profile below. ",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "c9a3b0ed-eb03-4363-a541-5ed9e2c6b72b",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "a93f549b-fc92-4baf-b44b-6123deff47c3",
            "title" : "Name of the FAIR Implementaton Community (FIC)",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "ea457867-91e7-4c02-876e-9b583b6d7f23",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "daf3b0f2-8205-48d3-87b0-b1b61edb27f7", 
                    "a93f549b-fc92-4baf-b44b-6123deff47c3", 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "bfe229e5-4e8d-428f-a788-d0f5b42d5b82", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "90ce1956-5538-466b-837a-0951d3c578fb"
                ]
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "2aa291af-70a6-4b89-869c-d125c1d076d0",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "11a8b614-9cec-410c-86eb-743c176b3df8",
            "title" : "Give a short “about” statement describing the FIC",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "0c18d2a0-23d9-447b-b2a1-e36f11d1c458",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "daf3b0f2-8205-48d3-87b0-b1b61edb27f7", 
                    "a93f549b-fc92-4baf-b44b-6123deff47c3", 
                    "11a8b614-9cec-410c-86eb-743c176b3df8", 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "bfe229e5-4e8d-428f-a788-d0f5b42d5b82", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "90ce1956-5538-466b-837a-0951d3c578fb"
                ]
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1d1b5e2e-8abc-4388-86d6-38669c07f033",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "cd1f9a64-fc74-44c4-a4a7-dbe829d95343",
            "title" : "Add supporting links",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "9e59a4ed-d6f1-4b2d-85d9-0f229ba7aab6",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "daf3b0f2-8205-48d3-87b0-b1b61edb27f7", 
                    "a93f549b-fc92-4baf-b44b-6123deff47c3", 
                    "11a8b614-9cec-410c-86eb-743c176b3df8", 
                    "cd1f9a64-fc74-44c4-a4a7-dbe829d95343", 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "bfe229e5-4e8d-428f-a788-d0f5b42d5b82", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "90ce1956-5538-466b-837a-0951d3c578fb"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d8a91b23-1cf6-4e9d-b0c6-fe75889e49b6",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f",
            "title" : {
                "changed" : true,
                "value" : "Contact Name(s)"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "20faf8b5-ab15-4d92-bc2c-ac699501e815",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "daf3b0f2-8205-48d3-87b0-b1b61edb27f7", 
                    "a93f549b-fc92-4baf-b44b-6123deff47c3", 
                    "11a8b614-9cec-410c-86eb-743c176b3df8", 
                    "cd1f9a64-fc74-44c4-a4a7-dbe829d95343", 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "bfe229e5-4e8d-428f-a788-d0f5b42d5b82", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "90ce1956-5538-466b-837a-0951d3c578fb"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "c41c4c89-ce8e-4d9a-98dd-a767d05028de",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f",
            "title" : {
                "changed" : true,
                "value" : "Contact Name"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "105adc99-6060-4a03-b124-f4d2419cb751",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "76ab60a6-2bb4-4185-92d1-4edb274897bf",
            "title" : "Contact ORCID",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "6940e69c-6f79-4e96-b52c-a0ab5e018cda",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "daf3b0f2-8205-48d3-87b0-b1b61edb27f7", 
                    "a93f549b-fc92-4baf-b44b-6123deff47c3", 
                    "11a8b614-9cec-410c-86eb-743c176b3df8", 
                    "cd1f9a64-fc74-44c4-a4a7-dbe829d95343", 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "76ab60a6-2bb4-4185-92d1-4edb274897bf", 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "bfe229e5-4e8d-428f-a788-d0f5b42d5b82", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "90ce1956-5538-466b-837a-0951d3c578fb"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "5488f787-6b63-4958-bae2-59ddd75f7357",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "3852df8a-faae-4638-8031-1ede6821fd73",
            "title" : {
                "changed" : true,
                "value" : "Contact email address"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "5dae541b-0b1d-483e-9e66-9f6e6280608f",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "bfe229e5-4e8d-428f-a788-d0f5b42d5b82"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "8a626054-fd18-458d-b4a3-724dc188cb9d",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "91d90ad4-4aa3-4536-8c25-66bd14893fa6",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please, indicate the research domain(s) represented by your FIC in using FAIRsharing. "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "d1d1b163-e6ff-4b3e-9d77-6eb13bd1e08b",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "daf3b0f2-8205-48d3-87b0-b1b61edb27f7", 
                    "a93f549b-fc92-4baf-b44b-6123deff47c3", 
                    "11a8b614-9cec-410c-86eb-743c176b3df8", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "cd1f9a64-fc74-44c4-a4a7-dbe829d95343", 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "76ab60a6-2bb4-4185-92d1-4edb274897bf", 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "90ce1956-5538-466b-837a-0951d3c578fb"
                ]
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "93257f23-9653-44ec-a313-cc161d09b05d",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "daf3b0f2-8205-48d3-87b0-b1b61edb27f7", 
                    "a93f549b-fc92-4baf-b44b-6123deff47c3", 
                    "11a8b614-9cec-410c-86eb-743c176b3df8", 
                    "cd1f9a64-fc74-44c4-a4a7-dbe829d95343", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "76ab60a6-2bb4-4185-92d1-4edb274897bf", 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "90ce1956-5538-466b-837a-0951d3c578fb"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "e5aa63d9-29c6-4b76-9d39-0528c8748282",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "91d90ad4-4aa3-4536-8c25-66bd14893fa6",
            "title" : {
                "changed" : true,
                "value" : "Add research domain"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-07-19T16:24:21.921Z")
},

{
    "id" : "gofair:fip-wizard:4.0.1",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.0.1",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.0.0",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "95a97e2b-fbf7-4191-9df9-325c779057eb",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Implementing the FAIR Principles requires numerous choices concerning the use of FAIR-Enabling Resources, be they domain-relevant standards or other technologies. These choices compose the FAIR Implementation Profile (FIP), and are made on behalf of a community of practice. A FAIR Implementation Community (FIC) is a voluntary association of people and organisations that agree to adhere to the same FIP. In this section of the FIP Wizard, you are requested to answer some questions that will define your FAIR Implementation Community. Note, the FIC can be large or small, formal or informal. It is anticipated that FIPs will likely evolve (merge, split) over time as they are designed, tested and reused by other FICs. "
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "1b4c209f-7d36-4013-84f4-19dfc13685d5",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "daf3b0f2-8205-48d3-87b0-b1b61edb27f7",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "FICs are FAIR data entities in themselves, identified by global unique and persistent identifiers (GUPRIs).  If your FIC is already defined in this way, please input the GUPRI here.  For example, the GO FAIR VODAN Implementation Network has been identified with the nanopubliction http://purl.org/np/RAdDKjIGPt_2mE9oJtB3YQX6wGGdCC8ZWpkxEIoHsxOjE "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "0139811a-84b7-4aaa-bf32-0c01a5c1f6c4",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "daf3b0f2-8205-48d3-87b0-b1b61edb27f7",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "FICs are FAIR data entities in themselves, identified by globally unique and persistent identifiers (GUPRIs).  For example, the GO FAIR VODAN Implementation Network has been identified with the nanopubliction http://purl.org/np/RAdDKjIGPt_2mE9oJtB3YQX6wGGdCC8ZWpkxEIoHsxOjE \nIf your FIC is already defined in this way, please input the GUPRI here. Otherwise you can compose a new FIC below. In future versions of the FIP Wizard, it will be possible to create a GUPRI for your community in this section.  "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "289544fb-7b9f-4f4f-96bd-04dc392c034e",
            "parentUuid" : "daf3b0f2-8205-48d3-87b0-b1b61edb27f7",
            "entityUuid" : "4e7eaa09-121b-4827-b157-8adb7c7ce516",
            "label" : {
                "changed" : true,
                "value" : "No. Please complete a new FIC profile below. "
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "c91c76d9-b1bb-486c-8810-ccb20b07d39c",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "a93f549b-fc92-4baf-b44b-6123deff47c3",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "A short name such as \"VODAN Implementation Network\", the name of a research project, or the name of a company. "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1b488475-4b01-4864-a796-af57b5c026d1",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "11a8b614-9cec-410c-86eb-743c176b3df8",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "This description will help define the scope of the community: large or small, formal or informal, permanent or temporary. "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0dba8985-34a1-4e6c-9105-95b9c58419f3",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "cd1f9a64-fc74-44c4-a4a7-dbe829d95343",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "These links will help define the topical domain or membership of the community. "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "c0397545-3239-4925-afaa-015ab78baf28",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "91d90ad4-4aa3-4536-8c25-66bd14893fa6",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please, indicate the research domain(s) represented by your FIC in using the domain-ontology in FAIRsharing. "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0f19bd00-bb57-4b01-95fc-5f813b6b7302",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please, enter the name of a contact person who will represent the FIC. "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ffbdbee5-14c0-4fbf-bff8-8a9e6f135acb",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f",
            "title" : {
                "changed" : true,
                "value" : "FIC Contact "
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "7e89b4f7-d8a3-4c9f-9cc8-ec176db6262d",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "76ab60a6-2bb4-4185-92d1-4edb274897bf",
            "title" : {
                "changed" : true,
                "value" : "FIC Contact ORCID"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "99d76531-3e35-4cc0-a020-c1a28390a2b5",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "3852df8a-faae-4638-8031-1ede6821fd73",
            "title" : {
                "changed" : true,
                "value" : "FIC Contact email address"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "2cba8109-4e52-4c95-8ec1-d6fd62f808ff",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "90ce1956-5538-466b-837a-0951d3c578fb",
            "title" : {
                "changed" : true,
                "value" : "Date of FIC/FIP creation or update "
            },
            "text" : {
                "changed" : true,
                "value" : "Please, specify the date when the the FIC or FIP was created or last updated. "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-07-20T06:15:50.940Z")
},

{
    "id" : "gofair:fip-wizard:4.0.2",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.0.2",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.0.1",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "61c70690-40dc-4b71-8e12-2b15f129469d",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "daf3b0f2-8205-48d3-87b0-b1b61edb27f7",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "FICs are FAIR data entities in themselves, identified by globally unique and persistent identifiers (GUPRIs).  For example, the GO FAIR VODAN Implementation Network has been identified with the nanopubliction http://purl.org/np/RAdDKjIGPt_2mE9oJtB3YQX6wGGdCC8ZWpkxEIoHsxOjE \n\nIf your FIC is already defined in this way, please input the GUPRI here. Otherwise you can compose a new FIC below. In future versions of the FIP Wizard, it will be possible to create a GUPRI for your community in this section.  "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "e51f0464-c882-47ff-a0b9-abcb4e3a6663",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "daf3b0f2-8205-48d3-87b0-b1b61edb27f7", 
                    "a93f549b-fc92-4baf-b44b-6123deff47c3", 
                    "11a8b614-9cec-410c-86eb-743c176b3df8", 
                    "cd1f9a64-fc74-44c4-a4a7-dbe829d95343", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "76ab60a6-2bb4-4185-92d1-4edb274897bf", 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "90ce1956-5538-466b-837a-0951d3c578fb"
                ]
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "4cb04f80-a681-424b-9476-b19badf0408a",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "daf3b0f2-8205-48d3-87b0-b1b61edb27f7"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8981a299-e776-4cbe-a351-0532762ad303",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "cd1f9a64-fc74-44c4-a4a7-dbe829d95343",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "These links will help define the topical domain or membership of the community. For example, the GO FAIR VODAN Implementation Network has been identified at the [webpage](https://www.go-fair.org/implementation-networks/overview/vodan/) and with the nanopubliction http://purl.org/np/RAdDKjIGPt_2mE9oJtB3YQX6wGGdCC8ZWpkxEIoHsxOjE \n\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-07-20T06:26:15.515Z")
},

{
    "id" : "gofair:fip-wizard:4.0.3",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.0.3",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.0.2",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "885af122-4175-4db2-b8cb-9519fd5c94ad",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "3aa30eff-8cd6-4aea-8446-759cb33e0a2c",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-07-20T06:33:38.406Z")
},

{
    "id" : "gofair:fip-wizard:4.0.4",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.0.4",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.0.3",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9f9b5a82-9945-4e20-aed8-f8a48bfa164a",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "1a2c7cae-da61-490b-a179-0e5fc75430e9",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0f95ae6a-79e0-4e3c-9fdf-9027597d6249",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "9f1492b1-6a4c-4cd4-bd6a-96ad7950fa68",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4a6b53c9-8901-4ada-84e3-66df6134c8e6",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "f0f7d2ec-1b34-414b-9b14-dcefa2a67c6b",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9f3a7482-6d2d-45c1-a737-a9f3340f1ab6",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "7f882a17-8349-4076-8ab1-83528abe9ce9",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b7518d1a-79c4-4dc1-8b86-a54fcf6f6f5b",
            "parentUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "entityUuid" : "3b4a4d1c-f74f-465c-95dd-3699070b443b",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "29f90998-e2fb-440c-b5e3-30d9f78e1a8b",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "447e7f37-1452-4928-b94a-e913a4b8be31",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "2b877b8c-c9bd-4d8e-a0c2-744f378d4f74",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "917584f1-b3b8-49d4-80fe-eae9cc17b306",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "80bc72b3-76d4-4537-b3b5-b1781816020a",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "479343c8-4f14-49e3-9d3e-a060dd8da314",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9c46c78a-62cc-4031-b631-4653280fb003",
            "parentUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "entityUuid" : "8d786555-4de3-435a-9a27-9eaf8bf92e8c",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "0ba1eb20-4ae4-462d-81e8-1f47217dd33a",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "37c8af6d-830a-4146-95d6-8f1f57ba9dc7", 
                    "572af6fd-f346-40d6-872f-bab23b2d6a2b"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fcff1346-e5dc-43bc-bfaf-ed38d3354a6e",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "572af6fd-f346-40d6-872f-bab23b2d6a2b",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "e79954cf-dff4-4f57-ae8b-fd800f13c141",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "da04a5df-f0de-4ccf-8750-214fc4330f13",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ce9bb13a-c618-4845-a2cd-774d2c31b7a5",
            "parentUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "entityUuid" : "19a278a0-88b5-4cde-9191-d58f2739eb34",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "e944d380-fcfc-4849-a4f3-6f700174e3e1",
            "parentUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "entityUuid" : "6838d085-c55a-42c6-897e-c58dd414d211",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "43542976-9543-4429-830b-71b4c42c07b4",
            "parentUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "entityUuid" : "96d6377e-02e8-4ef3-bbd1-e8849a139f8c",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fbf01027-cc06-441d-8b77-203838610ac4",
            "parentUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "entityUuid" : "d278b705-fcce-4d67-84c4-13a9521e0753",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "cd190db8-fff0-47c5-bca1-c7d918c22865",
            "parentUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "entityUuid" : "0def1fb7-c687-4671-b214-ef19f7cc0328",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ee1cb87d-15d4-442f-9d2b-c4957c4e13dd",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "de8a1eec-3cf5-41b9-8cae-af2fc67fbe2e",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a6db97d5-6918-4e64-b93e-dd3952307477",
            "parentUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "entityUuid" : "d7fc5fb5-4bde-4b6e-a940-b056048c272c",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "29afc005-45a2-4be9-bd09-4cd4968d42a9",
            "parentUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "entityUuid" : "598d5fda-7580-468f-8a68-ba0b7e9ebc19",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "c376544c-fe42-4a48-bb3a-758368c0f650",
            "parentUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "entityUuid" : "afa03886-359a-4f1d-bcbd-5038edde1d9d",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, then add your resource description here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-07-20T06:40:10.492Z")
},

{
    "id" : "gofair:fip-wizard:4.0.5",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.0.5",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.0.4",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "656c618c-660b-471f-8a58-f7e2d3c29cf4",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "cd1f9a64-fc74-44c4-a4a7-dbe829d95343",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "cf26d02d-dd64-47ca-bb07-dc3b70a35033",
            "parentUuid" : "cd1f9a64-fc74-44c4-a4a7-dbe829d95343",
            "entityUuid" : "42ba8edb-dd21-4131-88c6-c39107543ca6",
            "title" : "Supporting link ",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "506c3254-a469-47a8-9b3e-bb515865aeac",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "38b9e496-724d-45ea-8987-a04ce1774fb9",
            "title" : "Considerations",
            "text" : "Comments on (such as the requirements/constraints leading to) the choice of this FAIR-Enabling Resource. ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }
    ],
    "createdAt" : ISODate("2020-07-20T07:42:06.042Z")
},

{
    "id" : "gofair:fip-wizard:4.0.6",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.0.6",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.0.5",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f4e232e8-864d-4e36-b5b5-23b326f14f4b",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "38b9e496-724d-45ea-8987-a04ce1774fb9",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "7b02fc01-033d-4011-838f-fd2e85bb2992",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "11b1bcc0-eec1-4337-96fa-3101430be96e",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "dff6313f-9bfd-4086-aea5-3b39220ea9f2",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "b351f7d6-7b0a-43e6-a845-d82d27040435",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fe6adcf8-67a1-45b3-8eff-8da6de53bc14",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "be91f639-06e5-4d65-9375-d04bcf3af66b",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fa611e19-82ac-44bd-b29d-94851c43950b",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "01e9538b-0246-4ae1-a60b-c870bd2f7f10",
            "title" : "Consideration",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "256defda-0964-433c-8fec-faa68c0470c6",
            "parentUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "entityUuid" : "f321f449-7937-40da-9702-0df364a17fb5",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "22292544-668d-4ec7-873f-f5952a6f4957",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "d06cdad0-f322-4376-be83-0dffa3ea6ff2",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b4605cec-a3a6-4087-b9ad-ce75d9a5c83e",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "c74cecef-cc36-45c9-8400-7a6a56ca4e2d",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "68c9827d-507f-4564-b1a4-a79c00ea6693",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "c4d90bd6-0154-4bd9-ab7f-72f6f913625a",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "61eb7e12-b875-4ada-a223-a9bd2aa9106c",
            "parentUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "entityUuid" : "7e256841-6b67-4fd5-bc6f-51a80f91c991",
            "title" : "Consideration",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "30158e4a-3fee-4457-a0ec-920adf506dc3",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "ed203074-d9df-47bc-80ed-abf3283f3aa8",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "76fb2d45-8696-43f0-ab2d-8c81f0f83c42",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "0a43f23d-6261-4359-bcfb-2f58f3303c49",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "69fc2ef8-8565-4d4c-add8-b2fc2707e80c",
            "parentUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "entityUuid" : "fff28ddd-d34c-4dc9-8a20-ba26280eb39a",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "35119ef7-f74f-414e-8066-297a2957cfe8",
            "parentUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "entityUuid" : "55040213-7a86-416a-8eb6-85f05711587d",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "08909630-cdd3-4c2d-b585-27d08ebf529b",
            "parentUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "entityUuid" : "4f91161c-d968-4387-8264-0ba4e05f8f5a",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "565afce6-4548-40c5-94b5-5558af97d307",
            "parentUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "entityUuid" : "f423b127-9fce-4435-8d5b-44a36815f8fa",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1e18ed71-5482-4b1e-8820-c25d00d5e857",
            "parentUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "entityUuid" : "baca3035-1f3c-4964-b8f5-26182ca7f446",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1bd8db57-7e7a-49b9-bd23-44e077f82c31",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "312b5818-cdd3-43dc-bcf1-bb9788a88f19",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4157a1e5-8edb-40c0-839e-7745874c961c",
            "parentUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "entityUuid" : "cacd776b-b531-4487-bd53-a61dd9653b12",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4952784f-b129-4032-93a1-b84fdaab4611",
            "parentUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "entityUuid" : "53319468-f864-488c-aa6c-995f21cf9207",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4e7e3c47-5fc2-43aa-9e0a-b13f1f905d32",
            "parentUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "entityUuid" : "b5a6c104-b267-48c8-851c-7ee603bf7838",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased interoperation with another FIC). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b48d4bce-46d5-4a23-aa40-7f5e9c7f3cef",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "312b5818-cdd3-43dc-bcf1-bb9788a88f19",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased reuse of data among other FICs). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "e84f59ab-8e03-4c30-a9cd-dbef157a3ef9",
            "parentUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "entityUuid" : "cacd776b-b531-4487-bd53-a61dd9653b12",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased reuse of data among other FICs)."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fef82520-4f77-4b02-ad40-9dd4bcc60080",
            "parentUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "entityUuid" : "53319468-f864-488c-aa6c-995f21cf9207",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased reuse of data among other FICs)."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d9dcb15c-7f69-4045-85b0-50a2e1d5ebae",
            "parentUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "entityUuid" : "b5a6c104-b267-48c8-851c-7ee603bf7838",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, increased reuse of data among other FICs)."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9a6f780f-8fb0-4b33-bd11-e4ab37592a9a",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "d06cdad0-f322-4376-be83-0dffa3ea6ff2",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, access constraints on sensitive data reflecting local policy and regulations). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "cdacdb41-97e7-4c44-b74b-3aa12f141f8b",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "c74cecef-cc36-45c9-8400-7a6a56ca4e2d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, access constraints on sensitive data reflecting local policy and regulations). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8b8c3af9-0b26-4761-b04a-7ce09d915a54",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "c4d90bd6-0154-4bd9-ab7f-72f6f913625a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, access constraints on sensitive data reflecting local policy and regulations). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "00d57d7e-a761-4aef-b657-7386d3b0dab8",
            "parentUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "entityUuid" : "7e256841-6b67-4fd5-bc6f-51a80f91c991",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, access constraints on sensitive data reflecting local policy and regulations). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a11c38af-987e-4a32-b758-db47ed47304d",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "ed203074-d9df-47bc-80ed-abf3283f3aa8",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, budgetary limitations on the longevity of data and metadata). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fb073741-d60a-4fe1-b8a5-3bcf287fa58c",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "38b9e496-724d-45ea-8987-a04ce1774fb9",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the fundability of your data within or between domains). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "540d7226-9f3b-45fa-a799-dd915b2a2a3c",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "11b1bcc0-eec1-4337-96fa-3101430be96e",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the fundability of your data within or between domains). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "20563dba-949a-4f18-89e4-549027145fb7",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "b351f7d6-7b0a-43e6-a845-d82d27040435",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the fundability of your data within or between domains). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0c5ecdb2-a913-41d0-be1b-0525703999ef",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "be91f639-06e5-4d65-9375-d04bcf3af66b",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the fundability of your data within or between domains). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "72a89239-c1a6-4d61-bfa5-a234ece237af",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "01e9538b-0246-4ae1-a60b-c870bd2f7f10",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the fundability of your data within or between domains). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8dc40258-291e-455f-8fe8-5d853e6c5bcf",
            "parentUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "entityUuid" : "f321f449-7937-40da-9702-0df364a17fb5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the fundability of your data within or between domains). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-07-20T08:02:33.299Z")
},

{
    "id" : "gofair:fip-wizard:4.0.7",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.0.7",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.0.6",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6832871b-a543-49c6-8b70-75247207fbf9",
            "parentUuid" : "cd1f9a64-fc74-44c4-a4a7-dbe829d95343",
            "entityUuid" : "fb6e66c6-430f-40f6-ae0a-225c01100bfb",
            "title" : "Brief description of the link ",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }
    ],
    "createdAt" : ISODate("2020-07-20T14:00:17.585Z")
},

{
    "id" : "gofair:fip-wizard:4.0.8",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.0.8",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.0.7",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4b5611fa-eb06-4815-85fd-14d3cb8b2368",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f",
            "title" : {
                "changed" : true,
                "value" : "Community Data Steward "
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "86801ae7-63f3-444b-abb6-c22745818633",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "76ab60a6-2bb4-4185-92d1-4edb274897bf",
            "title" : {
                "changed" : true,
                "value" : "Community Data Steward ORCID"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9d68d0a4-3345-4e95-8450-22665c9bdf8a",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "3852df8a-faae-4638-8031-1ede6821fd73",
            "title" : {
                "changed" : true,
                "value" : "Community Data Steward email address"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-08-10T13:09:46.843Z")
},

{
    "id" : "gofair:fip-wizard:4.0.9",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.0.9",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.0.8",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "b6395f3b-88a0-4f9c-b995-16983aec2dba",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "94009727-49dc-4765-a5a9-6b8dff914cbe",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from FAIRsharing or put directly a GUPRI of the resource if you can't find it"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "19ade06c-10ef-48bc-8bdc-8cf5f906310b",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "3aa30eff-8cd6-4aea-8446-759cb33e0a2c",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in FAIRsharing, please create a nanopublication of the resource you use"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "05d94ad4-547f-47e0-9d50-a0ac5f8b63d1",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "999fd00e-0212-418d-8f52-a280acbf5730",
            "title" : "If you are planning to use another resource in future choose it from FAIRsharing if you can find it there",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : ""
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "2ce4f21b-354f-4955-bfb1-b72f77476ca8",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "94009727-49dc-4765-a5a9-6b8dff914cbe", 
                    "3aa30eff-8cd6-4aea-8446-759cb33e0a2c", 
                    "999fd00e-0212-418d-8f52-a280acbf5730", 
                    "38b9e496-724d-45ea-8987-a04ce1774fb9"
                ]
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "fd057ebd-11cf-4eed-8e2c-c05649e28592",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "d0ed7bf4-fd9a-4ce1-915c-9f7c4d437298",
            "title" : "If you can't find the resource in FAIRsharing please lookup in the Nanopublication registry for it",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "7600422e-c5fd-482e-8f20-1374cde1089c",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "94009727-49dc-4765-a5a9-6b8dff914cbe", 
                    "d0ed7bf4-fd9a-4ce1-915c-9f7c4d437298", 
                    "3aa30eff-8cd6-4aea-8446-759cb33e0a2c", 
                    "999fd00e-0212-418d-8f52-a280acbf5730", 
                    "38b9e496-724d-45ea-8987-a04ce1774fb9"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "cf185015-9e6f-4b19-a05c-ebf1e3a7a6d4",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "3aa30eff-8cd6-4aea-8446-759cb33e0a2c",
            "title" : {
                "changed" : true,
                "value" : "If you do not see your resource in Nanopublication registry, please create a nanopublication of the resource you use"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "00842622-bde8-4f8b-a575-766493953666",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "999fd00e-0212-418d-8f52-a280acbf5730",
            "title" : {
                "changed" : true,
                "value" : "If you are planning to use another resource in future choose it from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4a158e94-9ece-4783-abc6-56c1bde5ae39",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "12a23084-e99b-461d-836d-4df313077c32",
            "title" : "If you are planning to use another resource in future choose from Nanopublication if you can't find it in FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "273be9e2-4f7d-48aa-bdd3-6cae3a341799",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "94009727-49dc-4765-a5a9-6b8dff914cbe", 
                    "d0ed7bf4-fd9a-4ce1-915c-9f7c4d437298", 
                    "3aa30eff-8cd6-4aea-8446-759cb33e0a2c", 
                    "999fd00e-0212-418d-8f52-a280acbf5730", 
                    "12a23084-e99b-461d-836d-4df313077c32", 
                    "38b9e496-724d-45ea-8987-a04ce1774fb9"
                ]
            }
        }
    ],
    "createdAt" : ISODate("2020-09-23T07:02:25.829Z")
},

{
    "id" : "gofair:fip-wizard:4.1.0",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.1.0",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.0.9",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "004d6319-ca33-4916-8f65-8ef190fab210",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "38b9e496-724d-45ea-8987-a04ce1774fb9",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIP (for example, how this choice may impact the fundability of your data within or between domains). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a615ef06-42c9-46ea-9e11-e59755116efe",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "3241cfbf-b811-4d5f-a6be-3785cca47a37",
            "title" : "Current situation",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "5dc118e7-8800-4024-8e91-b1edda7ce5d7",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "3241cfbf-b811-4d5f-a6be-3785cca47a37",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "dbc662fd-f6b7-43f0-9b49-ac8a822c9d41",
            "parentUuid" : "3241cfbf-b811-4d5f-a6be-3785cca47a37",
            "entityUuid" : "55834520-3578-446f-95a4-6c97bda8fc35",
            "title" : "Do you have a globally unique, persistent and resolvable identifier?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "345f385e-eca3-4dbd-9d47-ff1626d9b159",
            "parentUuid" : "55834520-3578-446f-95a4-6c97bda8fc35",
            "entityUuid" : "beca4579-0dd3-4171-aca5-6d58923d27ee",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b4ba123f-8a9b-4c0d-ad7c-7e3979480d4f",
            "parentUuid" : "55834520-3578-446f-95a4-6c97bda8fc35",
            "entityUuid" : "69af3020-fcff-438c-ab42-53d8ae44d9bd",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f0593114-6725-409a-a37e-6ad7754fcfa5",
            "parentUuid" : "beca4579-0dd3-4171-aca5-6d58923d27ee",
            "entityUuid" : "6f56782f-abd9-4902-9c7d-88f562d8e648",
            "title" : "Look up identifier in FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "58a51022-8601-4663-971a-110903b4908d",
            "parentUuid" : "beca4579-0dd3-4171-aca5-6d58923d27ee",
            "entityUuid" : "6f56782f-abd9-4902-9c7d-88f562d8e648",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : ""
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "59bd20e1-6e64-425f-989c-6eac54be1d5c",
            "parentUuid" : "beca4579-0dd3-4171-aca5-6d58923d27ee",
            "entityUuid" : "338a5b87-779e-48e1-8a0f-2acd17846c36",
            "title" : "Look up identifier in the Nanopublication registry",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "ae6fa834-01b9-44c6-8ef2-59a3cdbd2743",
            "parentUuid" : "beca4579-0dd3-4171-aca5-6d58923d27ee",
            "entityUuid" : "6f56782f-abd9-4902-9c7d-88f562d8e648",
            "title" : {
                "changed" : true,
                "value" : "Look up identifier in FAIRsharing or just paste the identifier in the search box"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "370817bb-3f75-4e1b-a6e4-dd6af3371bcc",
            "parentUuid" : "beca4579-0dd3-4171-aca5-6d58923d27ee",
            "entityUuid" : "6f56782f-abd9-4902-9c7d-88f562d8e648",
            "title" : {
                "changed" : true,
                "value" : "Search in FAIRsharing or just paste it to save it"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "5d95475e-f783-4d60-9647-ce8000b5f343",
            "parentUuid" : "beca4579-0dd3-4171-aca5-6d58923d27ee",
            "entityUuid" : "338a5b87-779e-48e1-8a0f-2acd17846c36",
            "title" : {
                "changed" : true,
                "value" : "Search the Nanopublication registry"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "be4ec8d2-7b86-449a-8fa9-b14c2281ed91",
            "parentUuid" : "beca4579-0dd3-4171-aca5-6d58923d27ee",
            "entityUuid" : "6f56782f-abd9-4902-9c7d-88f562d8e648",
            "title" : {
                "changed" : true,
                "value" : "Search FAIRsharing or just paste the identifier"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "13795975-1578-4041-8b5a-26503a7b7af1",
            "parentUuid" : "69af3020-fcff-438c-ab42-53d8ae44d9bd",
            "entityUuid" : "5280419b-387e-4ca3-bfd4-98435d478361",
            "title" : "Create an identifier for your resource in the Nanopublication registry",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "48ebbc74-1775-4b3c-9650-c60a26141c2f",
            "parentUuid" : "3241cfbf-b811-4d5f-a6be-3785cca47a37",
            "entityUuid" : "55834520-3578-446f-95a4-6c97bda8fc35",
            "title" : {
                "changed" : true,
                "value" : "Do your resource have a globally unique, persistent and resolvable identifier?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "fbe1044e-4168-4809-8c21-56c8e4670e6d",
            "parentUuid" : "55834520-3578-446f-95a4-6c97bda8fc35",
            "entityUuid" : "beca4579-0dd3-4171-aca5-6d58923d27ee",
            "label" : {
                "changed" : true,
                "value" : "Yes or I am not sure"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4e01f5a2-a7b8-44c7-8e49-62ea1a136494",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "3c9d2ff9-a288-459f-bc07-51f89f146be4",
            "title" : "Future situation",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "8302d609-ca8d-47f5-a60c-3dac2ebff3f0",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "3c9d2ff9-a288-459f-bc07-51f89f146be4",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "91c51e6c-ae9e-42fb-ac53-f58d24023c68",
            "parentUuid" : "3c9d2ff9-a288-459f-bc07-51f89f146be4",
            "entityUuid" : "07b7da19-9e19-4143-9bc2-b0fabe95836a",
            "title" : "Do your resource have a globally unique, persistent and removable identifier?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3ae70dfb-9678-494e-8eae-98966c89b8a7",
            "parentUuid" : "07b7da19-9e19-4143-9bc2-b0fabe95836a",
            "entityUuid" : "64bd52ce-fc96-4b93-9596-c6acb998b6b9",
            "label" : "Yes or I am not sure",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ef77aa99-0611-442c-8b6b-f20712b582dd",
            "parentUuid" : "07b7da19-9e19-4143-9bc2-b0fabe95836a",
            "entityUuid" : "22b1b431-ae85-4a2e-b3e6-5015f70c4dbc",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "2b45e3be-94c7-4ea0-a452-e156e98c70c6",
            "parentUuid" : "64bd52ce-fc96-4b93-9596-c6acb998b6b9",
            "entityUuid" : "e275b808-6483-4732-9b4a-0b99f4988136",
            "title" : "Search FAIRsharing or just paste the identifier",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : ""
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "23582b87-05c9-454e-9f1d-33b27fce1bcf",
            "parentUuid" : "64bd52ce-fc96-4b93-9596-c6acb998b6b9",
            "entityUuid" : "ae2ecfbd-1dae-45d7-8761-613aa4e1216e",
            "title" : "Search the Nanopublication registry",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5f600473-96e5-4aae-a9d3-78b53f55fa15",
            "parentUuid" : "22b1b431-ae85-4a2e-b3e6-5015f70c4dbc",
            "entityUuid" : "1fed0bef-06c0-4d49-a024-abd735f4f643",
            "title" : "Create an identifier for your resource in the Nanopublication registry",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "ed1bb787-ebf2-4af5-9fe4-7ead45f7c4b6",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "12a23084-e99b-461d-836d-4df313077c32"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "e9413724-9446-4c95-9538-35e347e5e920",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "999fd00e-0212-418d-8f52-a280acbf5730"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "2968844e-e104-40d5-9423-b7eb4fcb50f0",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "3aa30eff-8cd6-4aea-8446-759cb33e0a2c"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "96afc9ba-e43e-48dc-9c9f-b1a4f86dc045",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "d0ed7bf4-fd9a-4ce1-915c-9f7c4d437298"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "3055239d-a2d4-49d9-9278-5a39052ce9fa",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "94009727-49dc-4765-a5a9-6b8dff914cbe"
        }
    ],
    "createdAt" : ISODate("2020-09-23T08:58:57.464Z")
},

{
    "id" : "gofair:fip-wizard:4.1.1",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.1.1",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.1.0",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "b94599a7-743d-460b-a656-4f6a59820bb6",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "The FAR Implementation Profile (FIP) is a collection of FAIR implementation choices made by a community of practice for each of the FAIR Principles. Community specific FAIR Implementation Profiles are themselves captured as FAIR datasets and are made openly available to other communities for reuse.\n\nThe FAIR Principles articulate the behaviors expected from digital artifacts that are Findable, Accessible, Interoperable and Reusable by machines and by people. Although by now widely accepted, the FAIR Principles by design do not explicitly consider actual implementation choices enabling FAIR behaviors. As different communities have their own, often well-established implementation preferences and priorities for data reuse, coordinating a broadly accepted, widely used FAIR implementation approach remains a global challenge. In an effort to accelerate broad community convergence on FAIR implementation options, the GO FAIR community has launched the development of the FAIR Convergence Matrix. The Matrix is a platform that compiles for any community of practice, an inventory of their self-declared FAIR implementation choices and challenges. The Convergence Matrix is itself a FAIR resource, openly available, and encourages voluntary participation by any self-identified community of practice (not only the GO FAIR Implementation Networks). For communities adopting FAIR practices, the collection of their implementation choices compose their FAIR Implementation Profile (FIP). The FIPs of numerous communities can be systematically acquired from the FAIR Convergence Matrix and used as the basis to optimize the reuse of existing resources and interoperation within and between domains. \nParticipating in this survey will help to vastly accelerate the well-informed implementation of FAIR among many tangential and other domains."
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "eed6dd0a-02cc-4d16-b11a-ce390fc78200",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "The FAR Implementation Profile (FIP) is a collection of FAIR implementation choices made by a community of practice for each of the FAIR Principles. Community specific FIPs are themselves captured as FAIR datasets and are made openly available to other communities for reuse."
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "a6380760-b948-4eaa-bbeb-04a74d94b2b4",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "3241cfbf-b811-4d5f-a6be-3785cca47a37",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "55834520-3578-446f-95a4-6c97bda8fc35"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ebfa05f0-e928-4ceb-a816-9fff68b721c4",
            "parentUuid" : "3241cfbf-b811-4d5f-a6be-3785cca47a37",
            "entityUuid" : "55834520-3578-446f-95a4-6c97bda8fc35",
            "title" : {
                "changed" : true,
                "value" : "Does your resource has a globally unique, persistent and resolvable identifier?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "752bf33b-f6b0-424d-b2be-eb884a88d3e8",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "title" : "Mint new FAIR-enabling resources",
            "text" : "Chapter text"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "bec2f975-9ca7-49a1-9fd5-f9e38b879b6d",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "44e51afa-9c1e-4774-aca9-cf5b48a2056d",
            "title" : "Where do you want to mint your resource?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1724cc90-9015-4c59-8ec9-11e0d872f7c2",
            "parentUuid" : "44e51afa-9c1e-4774-aca9-cf5b48a2056d",
            "entityUuid" : "da3a0573-238f-4025-83d2-b8982ec30a6c",
            "label" : "FAIRsharing",
            "advice" : "Please go to https://fairsharing.org/new/ and start to register the resource. Please be aware that only resources for F1 (standard), F2 (standard), F4 (database), I1 (standard), I2 (standard), I3 (standard), R1.2 (standard) are to be registered in FAIRsharing. For the remaining resources use Nanobench.",
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5ad4bd22-65ae-4e2d-b333-f70f9a6f6412",
            "parentUuid" : "44e51afa-9c1e-4774-aca9-cf5b48a2056d",
            "entityUuid" : "0f28ea9c-cedd-4be0-a0fc-84d3e9080058",
            "label" : "Nanobench",
            "advice" : "Please register a new resource in Nanobench, using this link: http://localhost:37373/publish?1&template=http://purl.org/np/RApJG4fwj0szOMBMiYGmYvd5MCtRle6VbwkMJUb1SxxDM\n\nBe aware that only resources for F3, A1.1, A1.2, A2, R1.1 and resources to be developed (challenges) should be registered in Nanobench. Other resources should be published in FAIRsharing.",
            "metricMeasures" : []
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "91688dc9-32c1-456f-9fcd-a88514d4a98a",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "9f1492b1-6a4c-4cd4-bd6a-96ad7950fa68"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "88d5de44-ab46-4702-b71e-f0ca730f23d2",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "cae8352d-a048-49ad-b95f-24454bb5f80a",
            "title" : "Choose your answer from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "db1e54f8-3873-427b-b13e-5b581c0288a7",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "d975599c-e3de-4acd-9370-0ff6537b888a", 
                    "cae8352d-a048-49ad-b95f-24454bb5f80a", 
                    "b351f7d6-7b0a-43e6-a845-d82d27040435"
                ]
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "ed5b6d0d-5ae6-4005-b36c-959b907f88b3",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "title" : "Only if you are planning to use another resource add your resource here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "c90be899-acbb-457c-b101-4d621182d1f2",
            "parentUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "entityUuid" : "ff940eb5-b2b6-4f06-b85c-c883cacb3c4e",
            "title" : "Please use from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : ""
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "298407a6-96cc-4c74-b0a8-c5a35310398e",
            "parentUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "entityUuid" : "a57428a6-8dfe-48e3-b846-d4a039ca934c",
            "title" : "Please lookup your resource in Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "6e14ce43-d25c-49b3-a28b-f0f5e2af29a2",
            "parentUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "entityUuid" : "ff940eb5-b2b6-4f06-b85c-c883cacb3c4e",
            "title" : {
                "changed" : true,
                "value" : "Please look up in FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "6826d20a-773c-4925-b4bb-f987fc611f85",
            "parentUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "entityUuid" : "ff940eb5-b2b6-4f06-b85c-c883cacb3c4e",
            "title" : {
                "changed" : true,
                "value" : "Please look up your resource in FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "c6b70713-0702-4da8-b0d7-976449d8cd98",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "b351f7d6-7b0a-43e6-a845-d82d27040435", 
                    "d975599c-e3de-4acd-9370-0ff6537b888a", 
                    "cae8352d-a048-49ad-b95f-24454bb5f80a", 
                    "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "835c8d24-c1af-4592-97f5-635436955742",
            "parentUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "entityUuid" : "ff940eb5-b2b6-4f06-b85c-c883cacb3c4e",
            "title" : {
                "changed" : true,
                "value" : "Please choose your resource in FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "05c54cb8-c9ce-4265-b87f-a4e4124f55dc",
            "parentUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "entityUuid" : "a57428a6-8dfe-48e3-b846-d4a039ca934c",
            "title" : {
                "changed" : true,
                "value" : "Please choose your resource from Nanobench"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "e39f1540-2cce-4680-a5ab-ae866f87d579",
            "parentUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "entityUuid" : "ff940eb5-b2b6-4f06-b85c-c883cacb3c4e",
            "title" : {
                "changed" : true,
                "value" : "Please choose your resource from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "6a3bac77-ce81-48b5-856f-63b99fa511e0",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "0798b1d2-65f7-4baf-a20e-1edf0f8f246d",
            "title" : "Mint a new FAIR-enabling resource (referring to F1, F2, F4, I1, I2, I3 and R1.2) in FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f20856cb-9e40-411a-9265-55f3964fdbb4",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "44e51afa-9c1e-4774-aca9-cf5b48a2056d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : true,
                "value" : [ 
                    "da3a0573-238f-4025-83d2-b8982ec30a6c", 
                    "0f28ea9c-cedd-4be0-a0fc-84d3e9080058"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4aaf1d90-9073-43d9-aa10-674e3b32d2f5",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "0798b1d2-65f7-4baf-a20e-1edf0f8f246d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please register a new resource here: https://fairsharing.org/new/\nSelect \"Add Standard\" for F1, F2, I1, I2, I3 and R1.2 FAIR enabling resources and add the requested metadata. Use the internal ID which will be later automatically replaced by a DOI in the respective answer box of the related FIP question."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3a844c8e-2798-4a69-bd3e-079f64365eee",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "d8b28d85-ce0a-4614-818f-4c9c34aef1b9",
            "title" : "Mint a new FAIR-enabling resource in Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "8cbbd7f8-7469-4934-9b08-59920dd49043",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "d8b28d85-ce0a-4614-818f-4c9c34aef1b9",
            "title" : {
                "changed" : true,
                "value" : "Mint a new FAIR-enabling resource (referring to F3, A1.1, A1.2, A2, R1.1 and to resources to be developed) in Nanobench"
            },
            "text" : {
                "changed" : true,
                "value" : "Please register a new resource in Nanobench, using this link: http://localhost:37373/publish?1&template=http://purl.org/np/RApJG4fwj0szOMBMiYGmYvd5MCtRle6VbwkMJUb1SxxDM\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "fe114698-4c23-41a0-b0f6-71af22b780f4",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "0798b1d2-65f7-4baf-a20e-1edf0f8f246d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please register a new resource here: https://fairsharing.org/new/\nSelect \"Add Standard\" for F1, F2, I1, I2, I3 and R1.2 FAIR enabling resources and add the requested metadata. \nSelect \"Add Database\" for F4 enabling resources and add the requested metadata. \nUse the internal ID which will be later automatically replaced by a DOI in the respective answer box of the related FIP question."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "45be6e4b-e09a-48c0-a40a-7597f9499657",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "44e51afa-9c1e-4774-aca9-cf5b48a2056d"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4ff2c4df-a7ff-4010-a739-b60659f80723",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "d8b28d85-ce0a-4614-818f-4c9c34aef1b9",
            "title" : {
                "changed" : true,
                "value" : "Mint a new FAIR-enabling resource in Nanobench"
            },
            "text" : {
                "changed" : true,
                "value" : "Only new FAIR-enabling resources referring to F3, A1.1, A1.2, A2, R1.1 and resources to be developed should be minted in Nanobench.\nPlease register a new resource in Nanobench, using this link: http://localhost:37373/publish?1&template=http://purl.org/np/RApJG4fwj0szOMBMiYGmYvd5MCtRle6VbwkMJUb1SxxDM\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "807057e0-ad20-40a0-b4b6-8203a9438e2e",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "0798b1d2-65f7-4baf-a20e-1edf0f8f246d",
            "title" : {
                "changed" : true,
                "value" : "Mint a new FAIR-enabling resource in FAIRsharing"
            },
            "text" : {
                "changed" : true,
                "value" : "Only new FAIR-enabling resources referring to F1, F2, F4, I1, I2, I3 and R1.2 should be minted in FAIRsharing.\nPlease register a new resource here: https://fairsharing.org/new/\nSelect \"Add Standard\" for F1, F2, I1, I2, I3 and R1.2 FAIR enabling resources and add the requested metadata. \nSelect \"Add Database\" for F4 enabling resources and add the requested metadata. \nUse the internal ID which will be later automatically replaced by a DOI in the respective answer box of the related FIP question."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4a296158-f816-40c1-994d-3328a73c7858",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "d8b28d85-ce0a-4614-818f-4c9c34aef1b9",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Only new FAIR-enabling resources referring to F3, A1.1, A1.2, A2, R1.1 and resources to be developed should be minted in Nanobench.\nPlease register a new resource in Nanobench, using this link: http://localhost:37373/publish?1&template=http://purl.org/np/RApJG4fwj0szOMBMiYGmYvd5MCtRle6VbwkMJUb1SxxDM\nThe registered resource will be retrievable by Nanobench after its publication.\n"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-09-23T22:22:49.447Z")
},

{
    "id" : "gofair:fip-wizard:4.1.2",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.1.2",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.1.1",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "a0d0cfbd-df7b-426c-bc14-22dc3005b56d",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "title" : {
                "changed" : true,
                "value" : "Only if you are planning to use in future another resource add your resource here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-09-23T22:34:11.070Z")
},

{
    "id" : "gofair:fip-wizard:4.1.3",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.1.3",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.1.2",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "eb7beff7-c5bb-4545-9a29-a7f7f574cde5",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "3241cfbf-b811-4d5f-a6be-3785cca47a37"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "9d0570e5-9272-4320-a463-1fac093237e8",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "3c9d2ff9-a288-459f-bc07-51f89f146be4"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b22de649-458f-4f3f-8291-b5cc412c7652",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "38b9e496-724d-45ea-8987-a04ce1774fb9",
            "title" : {
                "changed" : true,
                "value" : "Consideration"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "c6e226ae-f294-4a27-a0e0-11147399aaba",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "a79d7c5a-7ca5-4cad-a37c-9e01cd76963b",
            "title" : "Choose your answer from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : ""
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d4184b09-d7bc-43b6-b4cb-b9a50f9c378e",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "67877c27-a5a2-40af-a977-7494f2b3d875",
            "title" : "Choose your answer from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "21f0ef36-c149-4b6e-aeb6-d6a22c72f6c0",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "1a2c7cae-da61-490b-a179-0e5fc75430e9",
            "title" : {
                "changed" : true,
                "value" : "Choose your answer from Nanobench"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "37ca9152-03dc-457b-ae47-460edf4bb673",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "38b9e496-724d-45ea-8987-a04ce1774fb9"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "becb5f77-06fa-45ed-9481-ea14630468cf",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "a79d7c5a-7ca5-4cad-a37c-9e01cd76963b"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "2420e7e6-d647-4994-951e-cfb35b74395a",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "67877c27-a5a2-40af-a977-7494f2b3d875"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "4747f22d-461a-4d54-9347-844a992d2bab",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "d3c9ab2a-d6e4-491d-b1e5-08c1aaf3f88c"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "df2988b0-e40e-4948-8138-da0afbd60d29",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "1a2c7cae-da61-490b-a179-0e5fc75430e9"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "a817b6ac-1dcd-477a-9502-0231f474d838",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "11b1bcc0-eec1-4337-96fa-3101430be96e"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fe3add9e-ac3b-4004-935a-e5dab2c546dd",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "b351f7d6-7b0a-43e6-a845-d82d27040435",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the findability of your data within or between domains). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "7fa053a0-ed5e-4b19-a5dc-aecdd6805a9d",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "d975599c-e3de-4acd-9370-0ff6537b888a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Start typing in the search box to search for resources."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "77014316-65d1-4f48-b556-a634a2385115",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "d975599c-e3de-4acd-9370-0ff6537b888a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : null
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "f7d08b84-d202-42ea-9d99-8addb1dc9df0",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "title" : {
                "changed" : true,
                "value" : "Only if you are planning to use another resource in the future add it here"
            },
            "text" : {
                "changed" : true,
                "value" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "a1780ac9-87e8-47b7-b8fa-520d30202df3",
            "parentUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "entityUuid" : "ff940eb5-b2b6-4f06-b85c-c883cacb3c4e",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c8946795-c7e1-4a49-922e-03017b0e5028",
            "parentUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "entityUuid" : "a57428a6-8dfe-48e3-b846-d4a039ca934c",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from Nanobench"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "8939dfde-fd05-48c7-be5a-a4b80df610fb",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "d975599c-e3de-4acd-9370-0ff6537b888a",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7ea2e728-e20e-442d-a9ad-157c10571d80",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "cae8352d-a048-49ad-b95f-24454bb5f80a",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from Nanobench"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "8405b19e-21dc-4e26-8f4f-ed096152769f",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "title" : {
                "changed" : true,
                "value" : "Only if you are planning to use another resource in the future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "045d2f6b-7edc-40cc-aadd-3a97b4af87e0",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "title" : {
                "changed" : true,
                "value" : "Register a new FAIR-enabling resource as a nanopublication in Nanobench"
            },
            "text" : {
                "changed" : true,
                "value" : "If your resource is not already available in FAIRsharing or Nanobench you can use Nanobench to register this resource as a nanopublication. The nanopublication will be given a persistent URL (PURL). "
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "d48d1f3c-b7c0-4cad-b167-693aac506dc6",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "0798b1d2-65f7-4baf-a20e-1edf0f8f246d"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "89f04ec6-af0b-4c25-80d7-2e6ab28cd4e6",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "d8b28d85-ce0a-4614-818f-4c9c34aef1b9",
            "title" : {
                "changed" : true,
                "value" : "Register a new FAIR-enabling resource in Nanobench"
            },
            "text" : {
                "changed" : true,
                "value" : "[Use you Nanobench on localhost:37373](http://localhost:37373/publish?1&template=http://purl.org/np/RApJG4fwj0szOMBMiYGmYvd5MCtRle6VbwkMJUb1SxxDM). The registered resource will be retrievable by Nanobench after its publication."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3a7b25e1-e3d2-4949-aa40-1deea3a79f43",
            "parentUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "entityUuid" : "d8b28d85-ce0a-4614-818f-4c9c34aef1b9",
            "title" : {
                "changed" : true,
                "value" : "Register a FAIR-enabling resource"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "2df69516-a2e9-48a1-9fc4-5afff8e8942b",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "title" : {
                "changed" : true,
                "value" : "Background: The FAIR Implementation Profile and FAIR Implementation Community"
            },
            "text" : {
                "changed" : true,
                "value" : "The FAR Implementation Profile (FIP) is a collection of FAIR implementation choices made by a FAIR Implementation Community (FIC) for each of the FAIR Principles. Community-specific FIPs are themselves captured as FAIR datasets and are made openly available to other communities for reuse. To create a FIP, the FIC needs to fill out this questionnaire where the implementation choices are recorded as resources. The questionnaire is structured as follows: the first section is about the FIC, which is then followed by a number of questions per FAIR principle. The answer to each of the questions should be a FAIR-enabling resource. The questionnaire offers to options to fill in a resource: look op the resource in FAIRsharing or look up the resource in Nanobench. If the resource cannot be found in any of these, there is an option at the end of the questionnaire to register a FAIR-enabling resource as a nanopublication in Nanobench."
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "4b17006a-1c0b-40d3-8ba3-f4c2c1245f7b",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d68cbb7-3b51-4f22-afc9-0051cf477c8d",
            "title" : {
                "changed" : true,
                "value" : "Register a FAIR-enabling resource as a nanopublication in Nanobench"
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "363b3700-748e-4a4b-926f-414778cfaa28",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "The FAR Implementation Profile (FIP) is a collection of FAIR implementation choices made by a FAIR Implementation Community (FIC) for each of the FAIR Principles. Community-specific FIPs are themselves captured as FAIR datasets and are made openly available to other communities for reuse. To create a FIP, the FIC needs to fill out this questionnaire where the implementation choices are recorded as resources. The questionnaire is structured as follows: the first section is about the FIC, which is then followed by a number of questions per FAIR principle. The answer to each of the questions should be a FAIR-enabling resource. The questionnaire offers two options to fill out a resource: look op the resource in FAIRsharing or look up the resource in Nanobench. If the resource cannot be found in any of these applications, there is an option at the end of the questionnaire to register a FAIR-enabling resource as a nanopublication in Nanobench. The resource will get a PURL which can then directly be used when further filling out the questionnaire."
            },
            "questionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "634a0667-ac73-489e-838c-50723317e4fc",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "title" : {
                "changed" : true,
                "value" : "A1 Which standardized communication protocol are you using for metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "b908fe56-8d66-411d-8bb7-6cce85f806d9",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "title" : {
                "changed" : true,
                "value" : "A1 Which standardized communication protocol are you using for datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "65a1a658-0b72-4247-8a36-8692f3f0868c",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which authorization procedure are you using for metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "1cdfe275-25e8-4924-ab15-c2002cebed5c",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which authorization procedure are you using for datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "9180d7c8-a7fb-4f5a-8eb8-d04d63603b5f",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "title" : {
                "changed" : true,
                "value" : "R1.1 Which license do you use for your metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "7281df47-a3a4-4050-be99-56a600da3057",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "title" : {
                "changed" : true,
                "value" : "R1.1 Which license do you use for your datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "9530a442-0464-4dde-aa68-58b847b67cea",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "title" : {
                "changed" : true,
                "value" : "R1.2 Which metadata schema are you using describing the provenance of your metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "d63b3610-ac8b-415d-b0d5-da265bd039c0",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "title" : {
                "changed" : true,
                "value" : "R1.2 Which metadata schema are you using describing the provenance of your datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "2161b810-8c1e-4d36-964b-4fee3ab3906c",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "0d6d8772-7604-4835-9fe1-735ff9eb63fa",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "The FAR Implementation Profile (FIP) is a collection of FAIR implementation choices made by a FAIR Implementation Community (FIC) for each of the FAIR Principles. Community-specific FIPs are themselves captured as FAIR datasets and are made openly available to other communities for reuse. To create a FIP, the FIC needs to fill out this questionnaire where the implementation choices are recorded as resources. The questionnaire is structured as follows: the first section is about the FIC, which is then followed by a number of questions per FAIR principle. The answer to each of the questions should be a FAIR-enabling resource. The questionnaire offers two options to fill out a resource: look op the resource in FAIRsharing or look up the resource in Nanobench. If the resource cannot be found in any of these applications, there is an option at the end of the questionnaire to register a FAIR-enabling resource as a nanopublication in Nanobench. The resource will get a PURL which can then directly be used when further filling out the questionnaire. When the questionnaire is filled in, the FIP is considered to be the implementation of R1.3, which is why there is no separate question addressing this subprinciple."
            },
            "questionUuids" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-09-24T10:29:05.816Z")
},

{
    "id" : "gofair:fip-wizard:4.1.4",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.1.4",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.1.3",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "AddIntegrationEvent",
            "uuid" : "18cc1fcc-eeb1-4923-a397-199bec66cfbf",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "id" : "nanobench",
            "name" : "Nanobench",
            "props" : [],
            "logo" : "",
            "requestMethod" : "GET",
            "requestUrl" : "/",
            "requestHeaders" : {},
            "requestBody" : "",
            "responseListField" : "",
            "responseIdField" : "id",
            "responseNameField" : "name",
            "itemUrl" : ""
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "42d13242-36df-4421-b287-b53ddde03ed0",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "cae8352d-a048-49ad-b95f-24454bb5f80a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "39729d58-e7e3-4dac-afbe-8352c95f63e5"
            },
            "props" : {
                "changed" : true,
                "value" : {}
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "b964a030-ed57-403d-b52c-9349c713abc4",
            "parentUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "entityUuid" : "a57428a6-8dfe-48e3-b846-d4a039ca934c",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "39729d58-e7e3-4dac-afbe-8352c95f63e5"
            },
            "props" : {
                "changed" : true,
                "value" : {}
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "943aa9a0-850f-48a6-b825-a45cab5ead19",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "0fbd6fd5-6290-450a-b617-0e0d4e7fd78e",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : true,
                "value" : "StringQuestionValueType"
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "147e9082-0aa1-4ace-8dfc-08d0b49b7a68",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "d975599c-e3de-4acd-9370-0ff6537b888a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }
    ],
    "createdAt" : ISODate("2020-09-24T17:44:58.449Z")
},

{
    "id" : "gofair:fip-wizard:4.1.5",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.1.5",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.1.4",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ecdd4ed1-b767-4b5b-832f-b7a1835e3b0f",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "6318940e-d311-4102-836e-77dc0f2838f1",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the findability of your data within or between domains). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "b1190b2e-20da-42dc-95bc-871ebb81cbb7",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "eb623708-368e-49ef-b093-3ed5a12986c1",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : ""
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "f7c52ed3-d426-4467-9c29-bde0078251c3",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "2a880dab-4f2f-4ab5-aefe-ce4942542a37",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "ba948d6c-60f1-48b8-9e84-3a34b72e0250",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "47d618c6-568e-4112-b66a-339661bfc7fc",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "9d290f08-8a9c-4463-b722-29ecd2f84235",
            "parentUuid" : "47d618c6-568e-4112-b66a-339661bfc7fc",
            "entityUuid" : "f4ac44a5-be25-4b6f-b4a9-d7da4b139638",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : ""
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "67b9ebdb-de0d-41e8-b169-e7a1fbf3766c",
            "parentUuid" : "47d618c6-568e-4112-b66a-339661bfc7fc",
            "entityUuid" : "86205ba5-2016-4a4c-a3bf-d0aea015fec5",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1eb84199-734f-4ccb-8219-ff7c48d5cd70",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "891413be-e42d-409c-967f-a2e271777aab",
            "title" : "Consideration ",
            "text" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the findability of your data within or between domains). ",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "TextQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "22709538-d4dc-40ce-86ef-66079bbea056",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "770c6137-7359-4e34-89a2-17708645cbe1",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : ""
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "f069e401-b04b-457c-af47-475e908b581d",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "8b75db91-a7e6-4053-ba77-431ef0e8d67a",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "57e3afe0-fd58-4499-8120-fa95febb1f4c",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "4f3cfb2a-cbb4-40f5-a151-74c9bcb661bd",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "aa6d36d7-4333-41cb-b306-ea6545c191a2",
            "parentUuid" : "4f3cfb2a-cbb4-40f5-a151-74c9bcb661bd",
            "entityUuid" : "7dfc2257-9eca-4e14-ba0f-d8e52fe26707",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : "standard"
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "3f0dd29a-5f00-4738-832f-7db745eb4205",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "770c6137-7359-4e34-89a2-17708645cbe1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "9c175053-9fab-46df-afc0-825176f6f8dd",
            "parentUuid" : "47d618c6-568e-4112-b66a-339661bfc7fc",
            "entityUuid" : "f4ac44a5-be25-4b6f-b4a9-d7da4b139638",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "d28cb368-02c3-4534-b3aa-4b7b462e0418",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "eb623708-368e-49ef-b093-3ed5a12986c1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "9573c712-edf4-4376-badb-8fb8c98b6f10",
            "parentUuid" : "4f3cfb2a-cbb4-40f5-a151-74c9bcb661bd",
            "entityUuid" : "4a10d70e-2a4e-4ea1-a796-e5d100bc53ea",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "3d487549-12a8-4753-bc1e-9f6c7e650c51",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "be91f639-06e5-4d65-9375-d04bcf3af66b", 
                    "8c8b9c9b-1948-444f-8601-058006732b0d", 
                    "f0f7d2ec-1b34-414b-9b14-dcefa2a67c6b"
                ]
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "727df447-ace1-48e4-859f-e75f6a271fe4",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "f0f7d2ec-1b34-414b-9b14-dcefa2a67c6b"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "1ad701f1-d275-4443-8e17-825a876711ae",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "8c8b9c9b-1948-444f-8601-058006732b0d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a785dd98-1bc1-4e3c-8a5c-b0a3061681b3",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "be91f639-06e5-4d65-9375-d04bcf3af66b",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the findability of your data within or between domains). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "ca73ede7-df54-44e9-b2af-3f8931c8b5d7",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "59d34122-39d7-4587-ae39-de456d7459e2",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "e3106598-c078-4590-a80d-ee7a59f1daa8",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "293aed26-bf2c-446b-9c91-5acc0e354e63",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e31ed131-fcde-4f58-9a63-34be8e44207c",
            "parentUuid" : "293aed26-bf2c-446b-9c91-5acc0e354e63",
            "entityUuid" : "ec4c598a-f05a-48d4-9ba5-f54acd88c55f",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "b8ef873b-7273-41bc-b1b2-9bdb41df6850",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "293aed26-bf2c-446b-9c91-5acc0e354e63",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "ab8d4adb-b868-4b8f-9a6a-47fb53648d58",
            "parentUuid" : "293aed26-bf2c-446b-9c91-5acc0e354e63",
            "entityUuid" : "ec4c598a-f05a-48d4-9ba5-f54acd88c55f",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "e0171442-ba41-4749-8f06-7ac4d7922e97"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "93060f7b-c7b1-4787-8c04-17cf3306a972",
            "parentUuid" : "293aed26-bf2c-446b-9c91-5acc0e354e63",
            "entityUuid" : "e1657f7d-eb02-4baa-a40f-ae0b4ccf973e",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "5631cd1c-571a-4f48-9c17-41be1e07470f",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "01e9538b-0246-4ae1-a60b-c870bd2f7f10", 
                    "8509fe0d-2225-4230-8c71-991033389df3", 
                    "7f882a17-8349-4076-8ab1-83528abe9ce9"
                ]
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "97bcf8b2-0eba-45bc-8c7c-f0818d25bd5d",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "7f882a17-8349-4076-8ab1-83528abe9ce9"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "5f7bda70-7e5d-46d2-bb26-688b55272d70",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "01e9538b-0246-4ae1-a60b-c870bd2f7f10",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the findability of your data within or between domains). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "12a36d2b-5352-417e-9077-152452da199c",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "8509fe0d-2225-4230-8c71-991033389df3",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "28bf1165-6d63-43fa-b98b-82c90d575470",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "7bd33eba-28c2-4279-9dff-a2e672697936",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "311d9218-62a4-4217-ab33-6fa5d2f6fe77",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "07648d69-41c1-4f7c-bafa-8d93caa32d7c",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "f6ff668f-594d-4fec-a855-be8cf14dc7bc",
            "parentUuid" : "07648d69-41c1-4f7c-bafa-8d93caa32d7c",
            "entityUuid" : "0d32ff1a-201b-4425-a830-b3b3aef4a0bb",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : "database"
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "c7ac19ad-ecf5-43cf-a8e7-b30c2f7263f7",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "8509fe0d-2225-4230-8c71-991033389df3",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "database"
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "f58805a2-66cd-4a5a-9e36-387d2f1072ee",
            "parentUuid" : "07648d69-41c1-4f7c-bafa-8d93caa32d7c",
            "entityUuid" : "a74f5643-da60-4c93-8b93-bca758dca0cf",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "d650acb0-f90b-450e-9f1d-0d5eb57c5278",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "8c8b9c9b-1948-444f-8601-058006732b0d"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "e95c4061-c997-4c34-84c8-23495673d2b6",
            "parentUuid" : "293aed26-bf2c-446b-9c91-5acc0e354e63",
            "entityUuid" : "ec4c598a-f05a-48d4-9ba5-f54acd88c55f"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "068bf8b8-e272-4ee6-994a-d91fd3dff79c",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "f321f449-7937-40da-9702-0df364a17fb5", 
                    "3ded4b7d-fc8a-4386-b96f-34f0d681cf57", 
                    "3b4a4d1c-f74f-465c-95dd-3699070b443b"
                ]
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "436955fd-ba95-4f29-adc6-e005ffed08d5",
            "parentUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "entityUuid" : "3b4a4d1c-f74f-465c-95dd-3699070b443b"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1a69c534-2d56-4c28-9e2b-ea3bbd5856bc",
            "parentUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "entityUuid" : "f321f449-7937-40da-9702-0df364a17fb5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the findability of your data within or between domains). "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "e2bfa545-76cd-4e4c-962a-8122c4611284",
            "parentUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "entityUuid" : "3ded4b7d-fc8a-4386-b96f-34f0d681cf57",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "database"
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "9b755d59-c13e-4426-846d-51ef00e19cbf",
            "parentUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "entityUuid" : "20abafb3-72f8-4400-9e16-1acc1c61bf38",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "ad022fd3-baeb-45ee-9389-2d8db3642ad4",
            "parentUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "entityUuid" : "66665dd7-0d60-4ac6-a2dd-a69495899dd0",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "b34136e8-ef80-43aa-87c1-b58d2c1b3b3c",
            "parentUuid" : "66665dd7-0d60-4ac6-a2dd-a69495899dd0",
            "entityUuid" : "303abfbd-d135-4f1f-bc57-2b842ae4065a",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : "database"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "e8babf1f-4c8d-404f-9919-0483fff55b61",
            "parentUuid" : "66665dd7-0d60-4ac6-a2dd-a69495899dd0",
            "entityUuid" : "b28bc881-ad87-4564-ab18-0fa8ac8ac061",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "accfd01b-8dab-4d2d-a437-781cf0208a93",
            "parentUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "entityUuid" : "ff940eb5-b2b6-4f06-b85c-c883cacb3c4e",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "e9bdb404-57c0-40b7-8c5b-f26d1c5e0b41",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "d06cdad0-f322-4376-be83-0dffa3ea6ff2", 
                    "af78f22d-4a21-46d4-8c75-2a102b4c7208", 
                    "447e7f37-1452-4928-b94a-e913a4b8be31"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "87ae5d1f-f582-4386-a37e-02ec15a9d5ce",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "d06cdad0-f322-4376-be83-0dffa3ea6ff2",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the findability of your data within or between domains)."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "858a4cf4-d0d9-46a1-8890-bea9d717bcde",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "af78f22d-4a21-46d4-8c75-2a102b4c7208"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "302faa0e-385b-404a-b6dc-91aab7c51edc",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "447e7f37-1452-4928-b94a-e913a4b8be31"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "2a4d781a-c2a2-4772-ad7d-53bf1bf8ab1b",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "5746d5e3-3e98-460d-9a2e-61d3e974eab2",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "5161dacd-de79-43b0-9abc-e2bbba864c83",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "6668dca1-0761-485c-8f6f-2fe66e2f66bf",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "07a72c67-2149-4480-a99e-d64c0ccc4988",
            "parentUuid" : "6668dca1-0761-485c-8f6f-2fe66e2f66bf",
            "entityUuid" : "0979af91-88e6-4567-a25f-51dabd63ed30",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "a45e835b-e77d-455a-b632-93b5b541ffe9",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "c74cecef-cc36-45c9-8400-7a6a56ca4e2d", 
                    "22185a96-a575-46fb-a8c7-98b893569cb3", 
                    "917584f1-b3b8-49d4-80fe-eae9cc17b306"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "413a1f9c-91d6-470c-bba8-03b7942a25a2",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "c74cecef-cc36-45c9-8400-7a6a56ca4e2d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the findability of your data within or between domains)."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "b2fb48c9-e38a-45de-a4db-ba1d35b5a39a",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "22185a96-a575-46fb-a8c7-98b893569cb3"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "486cc06c-b2a6-4d53-a782-01847a47987d",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "917584f1-b3b8-49d4-80fe-eae9cc17b306"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "ef8d3164-8da1-4802-9fa4-3296943c0c1b",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "0fe3186c-c7c1-4cef-a8e0-820c2823e66d",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "386ff77d-2804-44a6-a3ea-cdda8de38cc2",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "ad6f9598-e308-4c6c-b751-b576e4423b8a",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "85724828-561f-4551-8945-f3866e1b7e86",
            "parentUuid" : "ad6f9598-e308-4c6c-b751-b576e4423b8a",
            "entityUuid" : "f5b9bf6d-23ea-429d-a937-d988dfb1f971",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "6a3f8c3d-d03d-4490-be91-603c85bc7804",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "c2dcc1b6-8535-4e74-8888-b0b777f9eda8"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "0934a68f-c54a-45d6-8a41-a07b0cf41884",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "479343c8-4f14-49e3-9d3e-a060dd8da314"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "eba59635-324c-475e-a1dc-a43d9e98187b",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "c4d90bd6-0154-4bd9-ab7f-72f6f913625a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, how this choice may impact the findability of your data within or between domains)."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "eeec63ab-0e50-4c10-9900-ab99482afabe",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "076e4fae-6668-4e84-a9f7-b00f1d33f58e",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "16e9da1b-3a36-4e5d-b7ff-df4939e38993",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "38e487a0-684e-4add-a2c5-3902e62807a8",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "ab4e3f73-8cc5-4506-a7a8-767d25877cbd",
            "parentUuid" : "38e487a0-684e-4add-a2c5-3902e62807a8",
            "entityUuid" : "e46681c4-d398-4a4d-875e-9829fa987301",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "04533c50-3fbd-46c2-8e37-8b22c1c08272",
            "parentUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "entityUuid" : "50862721-9c0a-462b-acba-081c3e4eed73"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "62564fae-7cc2-4e6a-a9fa-12a66c56d0f4",
            "parentUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "entityUuid" : "8d786555-4de3-435a-9a27-9eaf8bf92e8c"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "91d6501c-4707-4cda-95b3-20069fb58dba",
            "parentUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "entityUuid" : "7e256841-6b67-4fd5-bc6f-51a80f91c991",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, access constraints on sensitive data reflecting local policy and regulations)."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0d6198ce-ded0-4cdc-b888-c3787b52d795",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "c4d90bd6-0154-4bd9-ab7f-72f6f913625a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, access constraints on sensitive data reflecting local policy and regulations)."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "15e7bac1-29d9-4a28-8f2a-99984d58bbf8",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "c74cecef-cc36-45c9-8400-7a6a56ca4e2d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, access constraints on sensitive data reflecting local policy and regulations)."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "553eff9a-e32a-4e7f-8325-82f42040f58d",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "d06cdad0-f322-4376-be83-0dffa3ea6ff2",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, access constraints on sensitive data reflecting local policy and regulations)."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "8f77bc0c-8141-4945-8e0f-6ac1a38af5a5",
            "parentUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "entityUuid" : "db02f6cd-0e28-41d9-9ccf-a0e9040c422d",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "f9159f02-fa29-4198-b468-67424209ff52",
            "parentUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "entityUuid" : "60d79156-2028-43e7-93f7-09a8d8545e80",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "d0df295a-7fc0-468a-8c5e-8388b737f0ff",
            "parentUuid" : "60d79156-2028-43e7-93f7-09a8d8545e80",
            "entityUuid" : "76141aaf-1807-4667-a349-1ecdcf08f10b",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "5a810b16-08db-49ac-9f36-48fc31ac5bd2",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "37c8af6d-830a-4146-95d6-8f1f57ba9dc7"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "0abdd432-c0f4-459b-a2d2-a9e75301454a",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "572af6fd-f346-40d6-872f-bab23b2d6a2b"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d9899b6f-76e2-4466-aac3-516ffea3032c",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "ed203074-d9df-47bc-80ed-abf3283f3aa8",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Comments on the choice of this FAIR-Enabling Resource. These comments may include requirements or constraints unique to your FIC (for example, budgetary limitations on the longevity of data and metadata)."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "25670c7f-a8f0-4818-a8f8-59d0866bc6a0",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "f7ab7312-0f7f-4ba9-8141-85352a3115f4",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "315f0b58-29c9-49cc-bfed-0278d66adf77",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "f2f9124a-deb0-4485-9dbd-24fcb011458f",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "4e118317-b0eb-4d34-9d10-75568a07814c",
            "parentUuid" : "f2f9124a-deb0-4485-9dbd-24fcb011458f",
            "entityUuid" : "3d871bd7-06a4-41f4-858b-37211e30f332",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "fbeb0ef8-1e65-466c-8049-05aa4e0c4c58",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "f2f9124a-deb0-4485-9dbd-24fcb011458f",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "cdaa9fe0-1bea-4c44-b926-23a09085e059",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "da04a5df-f0de-4ccf-8750-214fc4330f13"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "92035ef3-2abc-4ce8-ab59-2ebd34d0f326",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "0a43f23d-6261-4359-bcfb-2f58f3303c49", 
                    "b05cbdda-1636-4c38-86c6-5b4820950e11"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "acc80795-8044-46b2-bd15-85f54c777f86",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "b05cbdda-1636-4c38-86c6-5b4820950e11",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "c44740ae-ee1d-4696-ade3-86bb0222848a",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "e3dd2327-0eaa-4ec2-8feb-9d66a78ec4c2",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "60dbfad7-d2e2-4a07-bf4c-282187eeb410",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "014a56b6-cc81-4044-9352-98a2c11acdfd",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "182d8cdc-b2cd-42c8-ac90-99a49f9af373",
            "parentUuid" : "014a56b6-cc81-4044-9352-98a2c11acdfd",
            "entityUuid" : "2efe903b-751e-45c8-a26c-bfe25515449e",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : "standard"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "a28bb703-5fbb-4a9d-a330-e990214332a3",
            "parentUuid" : "014a56b6-cc81-4044-9352-98a2c11acdfd",
            "entityUuid" : "2088b12c-1639-4db7-b4ca-00a89e3eaeb3",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "a0af050c-e86c-4a08-98e7-f748304179d6",
            "parentUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "entityUuid" : "6838d085-c55a-42c6-897e-c58dd414d211"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "5c260e29-4420-4378-a48b-d1416cb14645",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "fff28ddd-d34c-4dc9-8a20-ba26280eb39a", 
                    "68718ac7-b88a-47ce-86e6-5827e7834b89"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "35e064a7-d38e-4fca-a494-2f6f79f8186e",
            "parentUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "entityUuid" : "68718ac7-b88a-47ce-86e6-5827e7834b89",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "4ffa1053-1db5-4ecf-96ed-45aa932d8c10",
            "parentUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "entityUuid" : "219f86b7-88d4-466d-8748-1dcf88fc06b6",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "bb9afa4d-e222-40e1-befb-b205670ad3cc",
            "parentUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "entityUuid" : "0256112b-b2f5-44e5-be33-69ffeec6a561",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "946e0514-aee5-4959-9204-de15fe6a6008",
            "parentUuid" : "0256112b-b2f5-44e5-be33-69ffeec6a561",
            "entityUuid" : "6a8028fa-c546-4b0f-985b-6dc1ef20a56e",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : "standard"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "f980f79c-a396-430e-9ed9-35dc161ab843",
            "parentUuid" : "0256112b-b2f5-44e5-be33-69ffeec6a561",
            "entityUuid" : "bf2a6eb8-8d75-434f-813d-ccad06444c1d",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "4613cd88-e892-4699-bf74-02b836606db6",
            "parentUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "entityUuid" : "19a278a0-88b5-4cde-9191-d58f2739eb34"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "d2c05a5d-c420-4e30-95f1-05242f8acf57",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "55040213-7a86-416a-8eb6-85f05711587d", 
                    "48476982-e866-4feb-94f8-5b2b5d423c61"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "7fe2694e-bf04-4d0b-aaf5-ade2862b1431",
            "parentUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "entityUuid" : "48476982-e866-4feb-94f8-5b2b5d423c61",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "89cc1151-227a-456b-8ced-9c677b4f81da",
            "parentUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "entityUuid" : "8f9e5e00-77e4-4332-8270-a1a4257420ea",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "f09cb700-95f2-49e3-b0bb-238fba6a0e76",
            "parentUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "entityUuid" : "5700be0d-3918-42e0-b066-512fa6c9137a",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "90cbbf2e-38e2-4f4d-a61f-5fdbb36c5c58",
            "parentUuid" : "5700be0d-3918-42e0-b066-512fa6c9137a",
            "entityUuid" : "11059789-bf7a-4b0b-9663-411de782aa49",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : "standard"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "155f0298-8030-4204-b4b9-7a4403e683ef",
            "parentUuid" : "5700be0d-3918-42e0-b066-512fa6c9137a",
            "entityUuid" : "c10f580d-f14c-4d8a-bb41-5ea45dc8dbc5",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "3cbf4b7b-7a6e-4179-8ca7-8e437af50c9b",
            "parentUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "entityUuid" : "96d6377e-02e8-4ef3-bbd1-e8849a139f8c"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "56b43d31-0835-477e-963c-6a0954b2d79e",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "4f91161c-d968-4387-8264-0ba4e05f8f5a", 
                    "9f02dcd1-fed5-481d-bea5-577303523853"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "b260a014-27f3-4fc0-98d0-4f4e0ea7bbe4",
            "parentUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "entityUuid" : "9f02dcd1-fed5-481d-bea5-577303523853",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "654bac0a-f7f0-481a-8cd9-6a95dc04bbc1",
            "parentUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "entityUuid" : "40dbe55a-a532-4af2-a602-ca9fddae9412",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "5ff951c5-c0ff-4479-bd0b-7a133b5a8ab7",
            "parentUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "entityUuid" : "84e1d4c8-67f1-4d0e-b897-3b99c4feb9bb",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "23f59db7-62c0-43a1-8f70-150dd7d1debc",
            "parentUuid" : "84e1d4c8-67f1-4d0e-b897-3b99c4feb9bb",
            "entityUuid" : "08eb78d4-643a-41c3-9301-70302e7a00cd",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : "standard"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "6416d341-8caf-480b-8e88-cfbc9b52f5cd",
            "parentUuid" : "84e1d4c8-67f1-4d0e-b897-3b99c4feb9bb",
            "entityUuid" : "d71e4483-6b8b-4022-a25e-d4349f1dbf87",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "149a4aa8-d726-427a-a7bc-235d7a194f1e",
            "parentUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "entityUuid" : "d278b705-fcce-4d67-84c4-13a9521e0753"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "c8b07ce4-2370-45a2-9c86-c8090de69263",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "f423b127-9fce-4435-8d5b-44a36815f8fa", 
                    "ae187e7b-b7f6-447a-beae-35c7e1402cbc"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "c2fb562e-bab6-45d2-ae33-cd141bd67e6a",
            "parentUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "entityUuid" : "ae187e7b-b7f6-447a-beae-35c7e1402cbc",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "b7b73781-8721-478c-b6c3-ccb415975703",
            "parentUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "entityUuid" : "1e33211f-25e5-408c-a2a6-5dc9e06c6606",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "46640177-ef7a-4790-94a9-902810a7f354",
            "parentUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "entityUuid" : "87d51804-6741-477b-ae53-3941b5631a81",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "57966f5e-2f85-4009-a69c-9e0a061690c4",
            "parentUuid" : "87d51804-6741-477b-ae53-3941b5631a81",
            "entityUuid" : "2ca1f907-5e7e-4839-9cfd-b0aea80d080d",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : "standard"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "d987ae82-6c30-4ced-8c4f-ebc25652d2c8",
            "parentUuid" : "87d51804-6741-477b-ae53-3941b5631a81",
            "entityUuid" : "9d3ad18c-2055-4d13-b2d0-0bd3503da2cb",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "87a55596-0802-4aaf-bb4a-110bbadf0e13",
            "parentUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "entityUuid" : "0def1fb7-c687-4671-b214-ef19f7cc0328"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "b908a79a-8401-4650-ab3f-500d3d9d25be",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "baca3035-1f3c-4964-b8f5-26182ca7f446", 
                    "38a47f4a-1544-4867-b2f3-abbf4b12b20e"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "88e85bdb-f335-45e3-bc1a-fc62582745b1",
            "parentUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "entityUuid" : "38a47f4a-1544-4867-b2f3-abbf4b12b20e",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "00df49e2-b9d5-4f6c-9aa5-65f684f2e5c0",
            "parentUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "entityUuid" : "b8bc1ffb-64c8-42a6-b5cc-50e2c9813a1f",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "c587aa60-e711-4dcc-97c1-e6ae9be89852",
            "parentUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "entityUuid" : "a3d10b12-ae30-48f9-9827-239ea003398d",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "9e819c45-ac8b-4e17-aa16-4e32755eb349",
            "parentUuid" : "a3d10b12-ae30-48f9-9827-239ea003398d",
            "entityUuid" : "830ca9fb-ddb4-483b-8584-68f921d560e1",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : "standard"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "c701ef46-f732-46fe-8ac7-651474c56ee3",
            "parentUuid" : "a3d10b12-ae30-48f9-9827-239ea003398d",
            "entityUuid" : "59b3e9d1-4481-491b-bfc9-f431324f08e6",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "edfdb1b5-4922-4140-af54-1adbdaa22d69",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "0fbd6fd5-6290-450a-b617-0e0d4e7fd78e"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "e1eaf8ce-f3ce-49d4-a2b2-8382b57e12d2",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "de8a1eec-3cf5-41b9-8cae-af2fc67fbe2e"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "377740b6-0565-4ed2-bee7-5a00fbad97f2",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "964f0426-4e4a-4a36-ae66-a61a9fb397d7",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "361a4550-eb3d-4858-ae8d-c857c78f13cd",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "9653cc3e-4350-4610-ad6a-fc9151856be1",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "c9ff2ff8-9ddb-4b5a-a4d4-971700172e03",
            "parentUuid" : "9653cc3e-4350-4610-ad6a-fc9151856be1",
            "entityUuid" : "9197cb7a-9ad9-441b-a035-a0adbdf692d4",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "c3682663-781c-47c0-9be5-ae7dd8f78407",
            "parentUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "entityUuid" : "778f8ae8-1d6d-4daa-babc-6e2174455232"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "894dd640-80fa-45a6-8f0c-eff20a8184da",
            "parentUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "entityUuid" : "d7fc5fb5-4bde-4b6e-a940-b056048c272c"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "1af35bee-0735-43df-928e-9427a4bef84b",
            "parentUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "entityUuid" : "bf4ab9fb-db31-49b5-9cbf-379f0d6cc886",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "f8f7d65e-3530-4273-96f3-a831215ecc82",
            "parentUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "entityUuid" : "62e4811c-2217-4de9-9266-ff38524efc8c",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "c415e915-cdea-4479-a56b-c7dda43710d4",
            "parentUuid" : "62e4811c-2217-4de9-9266-ff38524efc8c",
            "entityUuid" : "cdc228ef-9a76-4141-96ff-153b22fc0512",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "0fbf00d4-3a61-4391-938c-9e0e21bf4ace",
            "parentUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "entityUuid" : "598d5fda-7580-468f-8a68-ba0b7e9ebc19"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "2076be5d-9751-4daf-9fad-775fd764d45a",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "53319468-f864-488c-aa6c-995f21cf9207", 
                    "4f344af5-84ef-4613-bbeb-4509b949ca62"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "32412466-e208-420e-9bff-faf04871ca78",
            "parentUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "entityUuid" : "4f344af5-84ef-4613-bbeb-4509b949ca62",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "5e6ce3f2-b14e-4e50-a498-6ad48378c1c8",
            "parentUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "entityUuid" : "c88733b2-e294-419b-81bf-27206542668a",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "4552439d-8030-460e-b95e-8093dd7d7c4e",
            "parentUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "entityUuid" : "72fd2469-3506-4e28-b8b3-f1049baa097f",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "47200b3c-99cd-48ba-a293-cfac8b126a89",
            "parentUuid" : "72fd2469-3506-4e28-b8b3-f1049baa097f",
            "entityUuid" : "52980e65-1841-4426-af2e-5609f62b1c29",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : "standard"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "1b4c41a9-3fe9-4d6b-b7f1-e544dcc2c00d",
            "parentUuid" : "72fd2469-3506-4e28-b8b3-f1049baa097f",
            "entityUuid" : "fa4b80dc-7427-4cf6-8299-4082eb1fcd0c",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "6223c1b3-342b-4223-b51e-6cbf09e6fd29",
            "parentUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "entityUuid" : "afa03886-359a-4f1d-bcbd-5038edde1d9d"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "70f597da-2e29-4ff0-b689-3c99eb3ed118",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "b5a6c104-b267-48c8-851c-7ee603bf7838", 
                    "c358894e-a82a-4536-8c5d-cbc4183d82c2"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "9a63c3a1-7717-4b48-a6d0-24ee952fe316",
            "parentUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "entityUuid" : "c358894e-a82a-4536-8c5d-cbc4183d82c2",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "registry" : "standard"
                }
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "4d180f63-ea6e-4426-9156-ea544b3fa0c6",
            "parentUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "entityUuid" : "abe255a0-7e65-4950-b2ae-47ac8ac30cc1",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "d459671f-6562-4472-86a5-c09b729df667",
            "parentUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "entityUuid" : "a2ad654d-95ce-4ab0-a853-0416c1c37868",
            "title" : "Only if you are planning to use another resource in the future, add it here",
            "text" : "It might be the case that you are using a specific resource at this moment but that there are plans to move to another resource in the future. If you already know which resource this is you can add it here.",
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "a4d7a55d-2a24-4e06-80ef-6345fe4efe68",
            "parentUuid" : "a2ad654d-95ce-4ab0-a853-0416c1c37868",
            "entityUuid" : "1b061704-78ed-42db-a175-0f0f59fc1b99",
            "title" : "Choose your resource from FAIRsharing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "e0171442-ba41-4749-8f06-7ac4d7922e97",
            "props" : {
                "registry" : "standard"
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "e5f68355-051f-4065-b952-5a3a3e5d8f1f",
            "parentUuid" : "a2ad654d-95ce-4ab0-a853-0416c1c37868",
            "entityUuid" : "83fdf983-73d3-4b6e-a9c5-58c91de07aa4",
            "title" : "Choose your resource from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }
    ],
    "createdAt" : ISODate("2020-09-24T19:20:50.878Z")
},

{
    "id" : "gofair:fip-wizard:4.1.6",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.1.6",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.1.5",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6c9a9cfa-3f79-4df0-93ee-80def2b98411",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "a93f549b-fc92-4baf-b44b-6123deff47c3",
            "title" : {
                "changed" : true,
                "value" : "Name of Community"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "388977bc-976c-4aea-9fd5-6607a3cf2767",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "11a8b614-9cec-410c-86eb-743c176b3df8",
            "title" : {
                "changed" : true,
                "value" : "Description of Community"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "1aaf6be9-c38d-4540-bbe0-6b4acda0f217",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "cd1f9a64-fc74-44c4-a4a7-dbe829d95343",
            "title" : {
                "changed" : true,
                "value" : "Supporting Links"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "639d91a5-e733-4311-a31a-f49fb9793551",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "91d90ad4-4aa3-4536-8c25-66bd14893fa6",
            "title" : {
                "changed" : true,
                "value" : "Research Domain"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ea4a345c-c745-45a7-9141-66e2941b6c42",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f",
            "title" : {
                "changed" : true,
                "value" : "Data Steward"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9cafdf17-3246-4eb9-b58e-8101901b330e",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "3852df8a-faae-4638-8031-1ede6821fd73",
            "title" : {
                "changed" : true,
                "value" : "Data Steward email"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "3dfc269f-7d02-4c42-a032-c81b2bce89e8",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "90ce1956-5538-466b-837a-0951d3c578fb",
            "title" : {
                "changed" : true,
                "value" : "Date of FIP creation"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ac12665b-f654-4eb0-a3bf-6784cc53ee79",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "76ab60a6-2bb4-4185-92d1-4edb274897bf",
            "title" : {
                "changed" : true,
                "value" : "Data Steward ORCID"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "d2938a33-0610-48ba-8d48-1989b42901e9",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "76ab60a6-2bb4-4185-92d1-4edb274897bf"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "7cfa7af4-3776-4189-aa40-cbd2165688c9",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please, enter the ORCID or name of a contact person who will represent the FIC. "
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "d16018c0-4365-40af-a789-3bb7a47217c1",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "title" : {
                "changed" : true,
                "value" : "What globally unique, persistent, resolvable identifiers do you use for metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "e37324f4-1044-4fe2-aee2-e5b4d006092b",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "title" : {
                "changed" : true,
                "value" : "F1 What globally unique, persistent, resolvable identifiers do you use for metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "a9568fa6-4087-438d-8c60-484d7836e532",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "title" : {
                "changed" : true,
                "value" : "F1  What globally unique, persistent, resolvable identifiers do you use for datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "14eacd9c-66e3-4db2-8f82-a7d45cec5a20",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "title" : {
                "changed" : true,
                "value" : "F2 Which metadata schemas do you use for findability?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "152b43ab-05d0-411b-8764-a5eef57177eb",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "c432cca7-be6f-4fbb-a1df-4300bf491c0d",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "4bfe4be6-ce68-4573-86ea-ef474693fc19",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "9ad66496-3bee-49b8-a10b-7aa461b4fab9",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "title" : {
                "changed" : true,
                "value" : "A1 Which standardized communication protocol do you use for metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "2f6700ca-4b1b-488c-9722-c59b193c6e05",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "title" : {
                "changed" : true,
                "value" : "A1 Which standardized communication protocol do you use for datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "720476cf-8b2c-4826-a788-a7c5b36f109d",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which authorization procedure do you use for metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "867f03d8-41fb-474b-8248-61b2fd94c9a3",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which authorization procedure do you use for datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "b16cedfb-d834-4ff6-b55e-baf6a8f47e73",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "d7d21f9e-509a-41b3-825a-f67809e83b05",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "title" : {
                "changed" : true,
                "value" : "I1 Which knowledge representation languages (allowing machine interoperation do you use for metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "bb70e6b9-52be-41ce-9f80-d9f80c5c32b6",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "title" : {
                "changed" : true,
                "value" : "I1 Which knowledge representation languages (allowing machine interoperation do you use for datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "5e0419eb-f72b-43ee-9985-253611b43f3c",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "title" : {
                "changed" : true,
                "value" : "I2 Which vocabularies do you use to annotate your metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "da2cf996-2400-4821-adc6-831160ff8c00",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "title" : {
                "changed" : true,
                "value" : "I2 Which vocabularies do you use to encode your datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "4564fe1f-f6c5-4e90-aaeb-9dee778153fe",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "294aaad5-d22d-40d5-a387-a445e98f2c8c",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "1862841a-e414-4253-8106-0dda98f9f04a",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "cf3b8dd3-f6d4-4285-9033-eee1316c750b",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "4d78d21d-6cf2-40bf-8bb9-44bb034abb1d",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "title" : {
                "changed" : true,
                "value" : "R1.2 Which metadata schemas do you use for describing the provenance of your metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "fec4cee9-74a9-4ef4-b633-136cfb26b4f8",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "title" : {
                "changed" : true,
                "value" : "R1.2 Which metadata schemas do you use for describing the provenance of your datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-09-25T11:09:17.506Z")
},

{
    "id" : "gofair:fip-wizard:4.1.7",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.1.7",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.1.6",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "770cbe28-4133-4283-be31-cb82954648ec",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "1a98d12d-8716-4d0e-87ab-c7e9b4ab9527",
            "title" : "Please select your community from Nanobench",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "integrationUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "props" : {}
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "fdcd9772-edb6-4d9f-b356-5eb1ff2a199a",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "1a98d12d-8716-4d0e-87ab-c7e9b4ab9527", 
                    "a93f549b-fc92-4baf-b44b-6123deff47c3", 
                    "11a8b614-9cec-410c-86eb-743c176b3df8", 
                    "cd1f9a64-fc74-44c4-a4a7-dbe829d95343", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "90ce1956-5538-466b-837a-0951d3c578fb"
                ]
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "b9eaec14-30e6-4bd8-b648-0c71db12f36c",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "12b1f039-0000-4c25-a78e-86fc45c7ccb6",
            "title" : "Please add some information about the Data Steward of the community",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "827be154-02bb-4e01-89a4-571645a9697d",
            "parentUuid" : "12b1f039-0000-4c25-a78e-86fc45c7ccb6",
            "entityUuid" : "84eb9758-a32a-4229-b55b-2be964d2df50",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditChapterEvent",
            "uuid" : "2311daa0-df62-4ee9-bd2c-94419f8a3d30",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "questionUuids" : {
                "changed" : true,
                "value" : [ 
                    "1a98d12d-8716-4d0e-87ab-c7e9b4ab9527", 
                    "a93f549b-fc92-4baf-b44b-6123deff47c3", 
                    "11a8b614-9cec-410c-86eb-743c176b3df8", 
                    "cd1f9a64-fc74-44c4-a4a7-dbe829d95343", 
                    "91d90ad4-4aa3-4536-8c25-66bd14893fa6", 
                    "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f", 
                    "3852df8a-faae-4638-8031-1ede6821fd73", 
                    "90ce1956-5538-466b-837a-0951d3c578fb", 
                    "12b1f039-0000-4c25-a78e-86fc45c7ccb6"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ab0101e9-1616-422c-86df-23afb779ded5",
            "parentUuid" : "12b1f039-0000-4c25-a78e-86fc45c7ccb6",
            "entityUuid" : "84eb9758-a32a-4229-b55b-2be964d2df50",
            "title" : {
                "changed" : true,
                "value" : "Please add the name of the Data Steward"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : true,
                "value" : "StringQuestionValueType"
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "94aa0133-d83c-4dbf-a3bc-6ab863102c5f",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "12b1f039-0000-4c25-a78e-86fc45c7ccb6",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : true,
                "value" : "StringQuestionValueType"
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "d8c204fb-bf0f-4917-803c-69eff03c156f",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "12b1f039-0000-4c25-a78e-86fc45c7ccb6",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1a07fd75-6beb-46b8-80a9-b5c3fc0313fe",
            "parentUuid" : "12b1f039-0000-4c25-a78e-86fc45c7ccb6",
            "entityUuid" : "ca105ab9-f03c-4631-8853-5e21dcd5d205",
            "title" : "Please add the name of the Data Steward",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "53dfcd30-4f46-4d10-a0c2-a897c5bd9a16",
            "parentUuid" : "12b1f039-0000-4c25-a78e-86fc45c7ccb6",
            "entityUuid" : "820ce6b9-f1df-4130-9edb-0e94e6416769",
            "title" : "Please add the ORCID of the Data Steward",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9d3765df-2a4e-490b-b140-24362432d31f",
            "parentUuid" : "12b1f039-0000-4c25-a78e-86fc45c7ccb6",
            "entityUuid" : "21b7fc89-c16c-456e-8c46-32733cc4ef6b",
            "title" : "Data Steward email",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "08d5ca12-77a1-446c-8536-eaad2b63e890",
            "parentUuid" : "12b1f039-0000-4c25-a78e-86fc45c7ccb6",
            "entityUuid" : "820ce6b9-f1df-4130-9edb-0e94e6416769",
            "title" : {
                "changed" : true,
                "value" : "Data Steward ORCID"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "7e2f2603-0f54-47fd-a134-b38561acfdd8",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "a93f549b-fc92-4baf-b44b-6123deff47c3"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "62e092dd-0ee0-4a0b-84b4-566decaa4519",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "11a8b614-9cec-410c-86eb-743c176b3df8"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "75fe087f-e26b-4d0d-81f5-878adf05b18d",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "cd1f9a64-fc74-44c4-a4a7-dbe829d95343"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "a3f17315-035d-442e-b8f1-0820cc9c7166",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "91d90ad4-4aa3-4536-8c25-66bd14893fa6"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "07346a1d-d480-4c41-a6da-a4e82ad4c253",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Please, enter the ORCID of a contact person who will represent the Community."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "a39236db-e49f-4429-b093-7b22aca7fdeb",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "12b1f039-0000-4c25-a78e-86fc45c7ccb6"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "74301e7a-d606-4302-aed0-ae4d099eee56",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "3852df8a-faae-4638-8031-1ede6821fd73"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "c318e414-96e1-44e2-a025-96556d7e0b63",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "90ce1956-5538-466b-837a-0951d3c578fb"
        }, 
        {
            "eventType" : "EditIntegrationEvent",
            "uuid" : "293c60ea-de95-494c-89a4-3533fbb2a0ad",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "id" : {
                "changed" : false
            },
            "name" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            },
            "logo" : {
                "changed" : false
            },
            "requestMethod" : {
                "changed" : false
            },
            "requestUrl" : {
                "changed" : true,
                "value" : "http://purl.org/nanopub/api/find_signed_things?type=https://w3id.org/fair/fip/terms/FAIR-Community&searchterm=+"
            },
            "requestHeaders" : {
                "changed" : false
            },
            "requestBody" : {
                "changed" : false
            },
            "responseListField" : {
                "changed" : false
            },
            "responseIdField" : {
                "changed" : false
            },
            "responseNameField" : {
                "changed" : false
            },
            "itemUrl" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "58fc120c-6686-41f7-b5d5-2a2f6a5fcb0c",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "b351f7d6-7b0a-43e6-a845-d82d27040435", 
                    "d975599c-e3de-4acd-9370-0ff6537b888a", 
                    "cae8352d-a048-49ad-b95f-24454bb5f80a", 
                    "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694"
                ]
            }
        }
    ],
    "createdAt" : ISODate("2020-09-28T18:42:49.878Z")
},

{
    "id" : "gofair:fip-wizard:4.1.8",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.1.8",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.1.7",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditIntegrationEvent",
            "uuid" : "fe7a72b3-9a50-40ce-ab8b-86de5ffecbec",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "id" : {
                "changed" : false
            },
            "name" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            },
            "logo" : {
                "changed" : false
            },
            "requestMethod" : {
                "changed" : false
            },
            "requestUrl" : {
                "changed" : true,
                "value" : "http://purl.org/nanopub/api/find_signed_things?type=https://w3id.org/fair/fip/terms/FAIR-Community"
            },
            "requestHeaders" : {
                "changed" : false
            },
            "requestBody" : {
                "changed" : false
            },
            "responseListField" : {
                "changed" : false
            },
            "responseIdField" : {
                "changed" : false
            },
            "responseNameField" : {
                "changed" : false
            },
            "itemUrl" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "bae3f713-1cbc-4cf2-b73b-a5efad95d896",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "title" : {
                "changed" : true,
                "value" : "F4 In which search engines are your metadata records indexed?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "6a30cd61-ba01-43ef-98a1-0f2fcb9ae190",
            "parentUuid" : "e3301b05-b02d-4c09-bb4b-7fb181414236",
            "entityUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "title" : {
                "changed" : true,
                "value" : "F4 In which search engines are your datasets indexed?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "a98574af-3236-41e5-b3a6-e16a345b6741",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which authentication & authorisation technique do you use for metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "65785d16-cb4e-4b2c-ac89-1f06b9757a17",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which authentication & authorisation technique do you use for datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "7f99b7fa-c249-4080-882b-33092f10e159",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "title" : {
                "changed" : true,
                "value" : "I1 Which knowledge representation languages (allowing machine interoperation) do you use for metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "0a8784b7-c9a6-45b7-95ac-25ffc85d2c90",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "title" : {
                "changed" : true,
                "value" : "I1 Which knowledge representation languages (allowing machine interoperation) do you use for datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "6eae96ac-4023-4553-a7e6-546959a7b24e",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "title" : {
                "changed" : true,
                "value" : "I2 Which structured vocabularies do you use to encode your datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "afdb1a54-c249-4132-b2ad-e8790c38efb2",
            "parentUuid" : "2b7ee188-a227-43a8-8bf9-a99e6aeb3939",
            "entityUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "title" : {
                "changed" : true,
                "value" : "I2 Which structured vocabularies do you use to annotate your metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "9e368e9c-d713-4dd7-9c4d-51067f883af5",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "title" : {
                "changed" : true,
                "value" : "R1.1 Which usage license do you use for your metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "f7021980-e74b-4504-9c51-38fa7f4c3d84",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "title" : {
                "changed" : true,
                "value" : "R1.1 Which usage license do you use for your datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b13f294c-78ff-4d90-965d-08e282e12b83",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "c9cd6f2d-d16e-4ef6-831f-a20e33290b6f",
            "title" : {
                "changed" : true,
                "value" : "Please enter the ORCID of the community data steward"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditIntegrationEvent",
            "uuid" : "bfe84d03-ac96-4447-85f9-35386972078e",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "id" : {
                "changed" : false
            },
            "name" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            },
            "logo" : {
                "changed" : false
            },
            "requestMethod" : {
                "changed" : false
            },
            "requestUrl" : {
                "changed" : true,
                "value" : "http://purl.org/nanopub/api/find_signed_things?type=https://w3id.org/fair/fip/terms/FAIR-Community&searchterm=+"
            },
            "requestHeaders" : {
                "changed" : false
            },
            "requestBody" : {
                "changed" : false
            },
            "responseListField" : {
                "changed" : false
            },
            "responseIdField" : {
                "changed" : false
            },
            "responseNameField" : {
                "changed" : false
            },
            "itemUrl" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditIntegrationEvent",
            "uuid" : "9ee6ba5c-cea9-4c96-8f55-f50a4d80cc2f",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "id" : {
                "changed" : false
            },
            "name" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            },
            "logo" : {
                "changed" : false
            },
            "requestMethod" : {
                "changed" : false
            },
            "requestUrl" : {
                "changed" : false
            },
            "requestHeaders" : {
                "changed" : true,
                "value" : {
                    "Accept" : "application/json"
                }
            },
            "requestBody" : {
                "changed" : false
            },
            "responseListField" : {
                "changed" : true,
                "value" : "results.bindings"
            },
            "responseIdField" : {
                "changed" : true,
                "value" : "thing.value"
            },
            "responseNameField" : {
                "changed" : true,
                "value" : "label.value"
            },
            "itemUrl" : {
                "changed" : true,
                "value" : "${id}"
            }
        }, 
        {
            "eventType" : "EditIntegrationEvent",
            "uuid" : "1e85f259-b0ff-43c6-a187-652d71ebfbc4",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "id" : {
                "changed" : false
            },
            "name" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            },
            "logo" : {
                "changed" : false
            },
            "requestMethod" : {
                "changed" : false
            },
            "requestUrl" : {
                "changed" : true,
                "value" : "http://grlc.nanopubs.lod.labs.vu.nl/api/local/local/find_signed_things?type=https://w3id.org/fair/fip/terms/FAIR-Community&searchterm=+"
            },
            "requestHeaders" : {
                "changed" : false
            },
            "requestBody" : {
                "changed" : false
            },
            "responseListField" : {
                "changed" : false
            },
            "responseIdField" : {
                "changed" : false
            },
            "responseNameField" : {
                "changed" : false
            },
            "itemUrl" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditIntegrationEvent",
            "uuid" : "5dd4a899-6b34-4752-91ef-80c385899a46",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "id" : {
                "changed" : false
            },
            "name" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            },
            "logo" : {
                "changed" : false
            },
            "requestMethod" : {
                "changed" : false
            },
            "requestUrl" : {
                "changed" : true,
                "value" : "http://purl.org/nanopub/api/find_signed_things?type=https://w3id.org/fair/fip/terms/FAIR-Community&searchterm=+"
            },
            "requestHeaders" : {
                "changed" : false
            },
            "requestBody" : {
                "changed" : false
            },
            "responseListField" : {
                "changed" : false
            },
            "responseIdField" : {
                "changed" : false
            },
            "responseNameField" : {
                "changed" : false
            },
            "itemUrl" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditIntegrationEvent",
            "uuid" : "87b2a2e7-2138-42ef-abe8-4b69e96ebe50",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "id" : {
                "changed" : false
            },
            "name" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            },
            "logo" : {
                "changed" : false
            },
            "requestMethod" : {
                "changed" : false
            },
            "requestUrl" : {
                "changed" : true,
                "value" : "http://purl.org/nanopub/api/find_signed_things?type=https%3A%2F%2Fw3id.org%2Ffair%2Ficc%2Fterms%2FCommunity&searchterm=+"
            },
            "requestHeaders" : {
                "changed" : false
            },
            "requestBody" : {
                "changed" : false
            },
            "responseListField" : {
                "changed" : false
            },
            "responseIdField" : {
                "changed" : false
            },
            "responseNameField" : {
                "changed" : false
            },
            "itemUrl" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditIntegrationEvent",
            "uuid" : "916f4622-c48d-4b2d-a8b7-a3e6ab574a50",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "id" : {
                "changed" : false
            },
            "name" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            },
            "logo" : {
                "changed" : false
            },
            "requestMethod" : {
                "changed" : false
            },
            "requestUrl" : {
                "changed" : true,
                "value" : "http://purl.org/nanopub/api/find_signed_things?type=https://w3id.org/fair/fip/terms/FAIR-Community&searchterm=+"
            },
            "requestHeaders" : {
                "changed" : false
            },
            "requestBody" : {
                "changed" : false
            },
            "responseListField" : {
                "changed" : false
            },
            "responseIdField" : {
                "changed" : false
            },
            "responseNameField" : {
                "changed" : false
            },
            "itemUrl" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-09-29T07:12:51.562Z")
},

{
    "id" : "gofair:fip-wizard:4.2.0",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.2.0",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.1.8",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "888fa83f-3af0-47dc-bad8-07115cc7c33e",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "title" : "Please choose the data usage license",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5bdf7bb9-ec4d-48b5-aad0-41986c0366d6",
            "parentUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "entityUuid" : "9448adac-5224-43a6-83b5-a3ee3eb5ba3d",
            "label" : "https://creativecommons.org/publicdomain/zero/1.0/",
            "advice" : "CC0 1.0 Universal (CC0 1.0)",
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4910166f-dd34-49a8-acf9-8a83ae19098b",
            "parentUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "entityUuid" : "8ef73502-ffeb-4a1d-b9f0-4acb97445f82",
            "label" : "https://creativecommons.org/licenses/by/4.0/",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8da8a999-942c-479b-b538-6e1eb93c7e0b",
            "parentUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "entityUuid" : "fd26bb84-2e1e-439d-8422-924a671a7ab8",
            "label" : "https://creativecommons.org/licenses/by-sa/4.0/",
            "advice" : "\nAttribution-ShareAlike 4.0 International (CC BY-SA 4.0)",
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "6dc8f0ea-02ef-4ee5-84ad-b17f50533755",
            "parentUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "entityUuid" : "8ef73502-ffeb-4a1d-b9f0-4acb97445f82",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution 4.0 International (CC BY 4.0) "
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "c8cb6a6a-357d-4c2c-abf2-867d6fd8e3ca",
            "parentUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "entityUuid" : "fd26bb84-2e1e-439d-8422-924a671a7ab8",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0e3fdd38-8982-4252-81e0-bde5fecdc9c4",
            "parentUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "entityUuid" : "c9cff717-94ad-475a-832f-a21387f5cff7",
            "label" : "https://creativecommons.org/licenses/by-nd/4.0/",
            "advice" : "Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)",
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b5835717-7eb8-4293-813a-b0d9b43039b1",
            "parentUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "entityUuid" : "1bdd81b0-7eaf-45e2-af6b-ed99e5dccf3e",
            "label" : "New answer",
            "advice" : "Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)",
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "b3120537-6d2f-42c0-9815-ab6a827f1054",
            "parentUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "entityUuid" : "1bdd81b0-7eaf-45e2-af6b-ed99e5dccf3e",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-nc/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5f14e72e-4bd7-48cf-af1e-9ee82b35159f",
            "parentUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "entityUuid" : "d5990a20-b9aa-471f-810f-52c33c4ca707",
            "label" : "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            "advice" : "Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) ",
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "de7e2c74-a249-4482-8f2b-366bc7fc0c20",
            "parentUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "entityUuid" : "7581a8b1-5741-4421-9e68-7d98d3b052e7",
            "label" : "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            "advice" : "Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) ",
            "metricMeasures" : []
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "da3ad06a-67aa-4c1f-b87e-162bbeef2ece",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "964f0426-4e4a-4a36-ae66-a61a9fb397d7"
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "bc6a62a3-52dd-46b1-b5cb-a22d8ce0dab6",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "title" : {
                "changed" : true,
                "value" : "Please choose the data usage license from the list"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "3631223d-4a3e-4894-bf39-07e24f5c71a8",
            "parentUuid" : "9653cc3e-4350-4610-ad6a-fc9151856be1",
            "entityUuid" : "9197cb7a-9ad9-441b-a035-a0adbdf692d4"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f59b9875-dc70-485f-b6c3-02dd9d2b460e",
            "parentUuid" : "9653cc3e-4350-4610-ad6a-fc9151856be1",
            "entityUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "title" : "Please choose the data usage license from the list",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ab6e5334-f7a9-434c-907e-7a187ee23f25",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "43cd0ddb-1310-40f9-840d-adf56f60249f",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "f4ca3b99-d50f-4482-a40d-8bf58b6bd7c3",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "43cd0ddb-1310-40f9-840d-adf56f60249f",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/publicdomain/zero/1.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "024e6d9a-df68-4adf-ac16-f9522204a65b",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "e41da2f0-c541-43a4-8c52-64bdc54f9598",
            "label" : "https://creativecommons.org/licenses/by/4.0/",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e4f17800-c78e-4cbe-a594-afb652aaa8bc",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "7499910b-44a5-41a7-b870-7f5d96cb4df1",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "b27c2c07-0a38-411d-9a41-fb29ca0dbc36",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "7499910b-44a5-41a7-b870-7f5d96cb4df1",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-sa/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4a22d03d-8d04-4f00-ac24-517aa9112ea0",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "e2c0f10f-7ba1-47cf-bee4-5125fcdc5c29",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "39507451-0379-4961-a0e1-c83b53d70127",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "e2c0f10f-7ba1-47cf-bee4-5125fcdc5c29",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-nd/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "74a702a7-f18b-4910-951d-195c69334f62",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "43cd0ddb-1310-40f9-840d-adf56f60249f",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "CC0 1.0 Universal (CC0 1.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "867fd9bd-72b8-42ea-9bf6-eb8a5d0013e2",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "e41da2f0-c541-43a4-8c52-64bdc54f9598",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution 4.0 International (CC BY 4.0) "
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "130503de-7544-414c-95b1-58a11071a286",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "7499910b-44a5-41a7-b870-7f5d96cb4df1",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "ac4871d4-d595-473f-979a-a31f619fe910",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "e2c0f10f-7ba1-47cf-bee4-5125fcdc5c29",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6825dbbe-ed90-42f6-b6d6-ecc0423f2799",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "b1859997-bcfa-4c84-99bf-a19551f72bab",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "72dfe621-cb11-43db-a85e-1c92a30e3228",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "b1859997-bcfa-4c84-99bf-a19551f72bab",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-nc/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "d94e6637-39c9-4605-8af1-b2d5dd12596f",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "b1859997-bcfa-4c84-99bf-a19551f72bab",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "22222410-2cdc-41c1-ad06-9b55c5a79e71",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "2ec49321-ea6f-487c-9beb-9205c9b29f82",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "f39efe08-b8d3-4f1d-bdff-b51acee378b1",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "2ec49321-ea6f-487c-9beb-9205c9b29f82",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-nc-sa/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "353966e8-479a-442b-bacd-776f51b17787",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "2ec49321-ea6f-487c-9beb-9205c9b29f82",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) "
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "171e2cd5-97d0-4651-9f0f-165a4bcf540c",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "5a81646d-43a0-4496-8fb3-90e96929ff61",
            "label" : "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "abc804ba-03a1-45ea-b3fb-ccd87d2b8bbb",
            "parentUuid" : "615f99cf-275a-42b6-bc48-405021cfaf66",
            "entityUuid" : "5a81646d-43a0-4496-8fb3-90e96929ff61",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) "
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "5ef242b7-cbd4-4dcf-b109-54f0c18eecb4",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "312b5818-cdd3-43dc-bcf1-bb9788a88f19", 
                    "812fc813-effa-4183-909c-bbc4154730e3", 
                    "9653cc3e-4350-4610-ad6a-fc9151856be1"
                ]
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "57419305-8adf-4bf2-92c9-29a6b96455ba",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "If you need help to choose from the list please check this website:\nhttps://chooser-beta.creativecommons.org/"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-09-29T07:49:04.191Z")
},

{
    "id" : "gofair:fip-wizard:4.2.1",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.2.1",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.2.0",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "4332f271-05f8-4caa-80e5-875df426926c",
            "parentUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "entityUuid" : "bf4ab9fb-db31-49b5-9cbf-379f0d6cc886"
        }, 
        {
            "eventType" : "DeleteQuestionEvent",
            "uuid" : "71b13f38-b796-4890-933e-86e0ddfc7d19",
            "parentUuid" : "62e4811c-2217-4de9-9266-ff38524efc8c",
            "entityUuid" : "cdc228ef-9a76-4141-96ff-153b22fc0512"
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "fad5e4b7-3a5b-41fd-94b6-e255d0029c54",
            "parentUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "entityUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "title" : "Please choose the data usage license from the list",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ac330aad-8c35-4272-96c5-24a02ee7f4a8",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "bc29086b-6ea0-4ef2-98f3-513601ffcdea",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "99a31db4-18bb-4cb5-a48d-1815bf566a97",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "bc29086b-6ea0-4ef2-98f3-513601ffcdea",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/publicdomain/zero/1.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "ad33c40e-7b5d-4563-bcab-1d71f52006b2",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "bc29086b-6ea0-4ef2-98f3-513601ffcdea",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "CC0 1.0 Universal (CC0 1.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c3b8fc8b-b018-4b5b-b6fe-f038e3d647a4",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "fc0eead0-22f7-49cf-8a9d-fa7dc72a7dd0",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "1857b20d-3404-4dc1-aebf-89715cdf9659",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "fc0eead0-22f7-49cf-8a9d-fa7dc72a7dd0",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "ed2ef62c-36ba-4b4f-869b-8aa2346a1d33",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "fc0eead0-22f7-49cf-8a9d-fa7dc72a7dd0",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution 4.0 International (CC BY 4.0) "
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b922b115-a8cb-4bc8-bdb2-366ab04309a7",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "40937608-3030-47ed-a2b2-bd1d6a451f10",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "83e3f70a-2082-4939-b75c-748f29fcb207",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "40937608-3030-47ed-a2b2-bd1d6a451f10",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-sa/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "e729c56c-4dae-4418-9afa-ae8e91ff7726",
            "parentUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "entityUuid" : "fd26bb84-2e1e-439d-8422-924a671a7ab8",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-sa/4.0/"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "8f5f03c4-3270-40c1-80a7-56edaa153290",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "40937608-3030-47ed-a2b2-bd1d6a451f10",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "09df1054-9b13-4058-9b6d-33f07a9fec61",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "6c05ead3-13d2-4682-88fa-aa9527c4bc7a",
            "label" : "https://creativecommons.org/licenses/by-nd/4.0/",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "22398a3f-ac82-4369-800b-ea94dc81f840",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "6c05ead3-13d2-4682-88fa-aa9527c4bc7a",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "481055e8-1c93-4715-8222-e08bdfd1784c",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "200f69b3-192d-4fa6-9570-ee8fe3981d21",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "b1297edd-d742-434c-a4d1-dcc0da9bf809",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "200f69b3-192d-4fa6-9570-ee8fe3981d21",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-nc/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "4c145816-b592-4409-ac91-ac1ad2e552ed",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "200f69b3-192d-4fa6-9570-ee8fe3981d21",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "abcbb4aa-ff50-4d5d-863c-68c7b42efa68",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "0c8ebea0-166e-40c0-9c42-00191e825bc1",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "3204fdd8-7bc5-410e-9cf0-61f7d296231d",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "0c8ebea0-166e-40c0-9c42-00191e825bc1",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-nc-sa/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "3508d010-0aaf-4b4a-8f98-d561e8e48ef8",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "0c8ebea0-166e-40c0-9c42-00191e825bc1",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) "
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "03940be8-9d1e-47cc-b811-19d91ac6e07e",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "6c1c7f79-3a10-4c0c-a2e6-baf363142d5a",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "1fad62f0-e9bb-433b-b85e-3c8b0adfadf2",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "6c1c7f79-3a10-4c0c-a2e6-baf363142d5a",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-nc-nd/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "d6a00fbc-69c5-4788-ad7a-3553a2b6f55f",
            "parentUuid" : "55b072f8-f2b7-4cf6-be7f-19fd48ccf069",
            "entityUuid" : "6c1c7f79-3a10-4c0c-a2e6-baf363142d5a",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) "
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "441d3bab-ee69-4b02-800e-f7f44180fb2b",
            "parentUuid" : "62e4811c-2217-4de9-9266-ff38524efc8c",
            "entityUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "title" : "New question",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "682b0a11-42a8-4bb4-af3b-fea6f847015b",
            "parentUuid" : "62e4811c-2217-4de9-9266-ff38524efc8c",
            "entityUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "title" : {
                "changed" : true,
                "value" : "Please choose the data usage license from the list"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1b6ff3ea-2c67-4100-9767-e4e448a61f7e",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "6530ee23-7466-4347-8920-4f1fb1fe716c",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "4e31ef7a-2e78-4d5d-99a9-3c518f94a8cf",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "6530ee23-7466-4347-8920-4f1fb1fe716c",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/publicdomain/zero/1.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "6ecc8185-78df-4d52-acad-961fb3a92f3d",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "6530ee23-7466-4347-8920-4f1fb1fe716c",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "CC0 1.0 Universal (CC0 1.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "be3e585a-5cf3-45b8-952b-8349c3ea9183",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "000de271-95f3-4140-9bd5-ba2404e0fc8c",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "877a1fbe-3d4f-4a02-8278-dabeac107759",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "000de271-95f3-4140-9bd5-ba2404e0fc8c",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "eb9b726f-f82b-4761-bd58-d97bab1bfefb",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "000de271-95f3-4140-9bd5-ba2404e0fc8c",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution 4.0 International (CC BY 4.0) "
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9fe584e9-6293-4939-82a0-6378e703d2b1",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "1fbbed4f-c10c-4c03-b439-071d0ca8f088",
            "label" : "https://creativecommons.org/licenses/by-sa/4.0/",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "0b00e57a-a332-42c2-9ea2-d5fc69ad20ef",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "1fbbed4f-c10c-4c03-b439-071d0ca8f088",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "12f949ed-65ec-4c3b-84e5-ce4763b46522",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "d398851e-a6cb-4c64-aa18-b20b9b174f3b",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "db4e8017-c313-4f87-97d1-758a66c708c8",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "d398851e-a6cb-4c64-aa18-b20b9b174f3b",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-nd/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "61e4b3ad-5bf0-4371-9303-19d1b56ca6c8",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "d398851e-a6cb-4c64-aa18-b20b9b174f3b",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "08b9e361-ef75-4e31-a290-9f111f3a41cd",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "ccf39c8c-4fe4-499b-b13a-420e28cc5e65",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "e382baa8-6cbe-4c14-9593-17bfeca681b6",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "ccf39c8c-4fe4-499b-b13a-420e28cc5e65",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-nc/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "2e92f263-0779-42e9-8289-213e1161bda5",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "ccf39c8c-4fe4-499b-b13a-420e28cc5e65",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "56c3afc7-9c64-49fc-a86a-805cac8165af",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "c65ec927-190f-4e04-b1e4-78e82d250e4d",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "a2435c62-b911-43e9-872e-bf5e9280230f",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "c65ec927-190f-4e04-b1e4-78e82d250e4d",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-nc-sa/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "34d4b0e0-da56-4d6b-a4c2-ca5412f3aca7",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "c65ec927-190f-4e04-b1e4-78e82d250e4d",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) "
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "73cd8712-2f4e-4e23-9680-ce98fef97aea",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "c65ec927-190f-4e04-b1e4-78e82d250e4d",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) "
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "504fca28-361d-4c3c-a9ec-74e31d939eb4",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "e0a9dcb7-9541-4b03-9a9c-f3b4948240cb",
            "label" : "New answer",
            "advice" : null,
            "metricMeasures" : []
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "347a1317-ac67-459f-b2a9-fdcad016f8f4",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "e0a9dcb7-9541-4b03-9a9c-f3b4948240cb",
            "label" : {
                "changed" : true,
                "value" : "https://creativecommons.org/licenses/by-nc-nd/4.0/"
            },
            "advice" : {
                "changed" : false
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "97117a83-2631-414b-a31b-246b5379b9c2",
            "parentUuid" : "c8a3a31e-e184-4e53-90fa-c9b6886382a5",
            "entityUuid" : "e0a9dcb7-9541-4b03-9a9c-f3b4948240cb",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) "
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "f1951709-f86f-4a59-8990-eb4d1a31a87e",
            "parentUuid" : "37e3ef76-71e1-47a9-be84-e1f1d9452193",
            "entityUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : true,
                "value" : [ 
                    "cacd776b-b531-4487-bd53-a61dd9653b12", 
                    "55b072f8-f2b7-4cf6-be7f-19fd48ccf069", 
                    "62e4811c-2217-4de9-9266-ff38524efc8c"
                ]
            }
        }, 
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "b3d3b887-a7e1-4a7c-9a83-622d9b1d8986",
            "parentUuid" : "812fc813-effa-4183-909c-bbc4154730e3",
            "entityUuid" : "fd26bb84-2e1e-439d-8422-924a671a7ab8",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)"
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-09-29T08:00:25.299Z")
},

{
    "id" : "gofair:fip-wizard:4.2.2",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.2.2",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.2.1",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "084b4cde-5931-4624-aab4-250390336702",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "47d618c6-568e-4112-b66a-339661bfc7fc",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "56e793d0-c2b2-4684-a412-b03e415db309",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "4f3cfb2a-cbb4-40f5-a151-74c9bcb661bd",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "921faf3b-d35f-4e5a-a1c3-8da9b28e0b17",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "b0e67de1-8605-43b7-ad42-1fb0f0a9a0cd",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "293aed26-bf2c-446b-9c91-5acc0e354e63",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "ad81eda1-2808-464b-9db9-e4f9121646fc",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "07648d69-41c1-4f7c-bafa-8d93caa32d7c",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "0f555dea-dc0f-46c7-acdc-21a599efcab2",
            "parentUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "entityUuid" : "66665dd7-0d60-4ac6-a2dd-a69495899dd0",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "a6279d6b-37fb-416d-836b-b4ef785adaf4",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "6668dca1-0761-485c-8f6f-2fe66e2f66bf",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "57747a28-6e3c-4e73-8310-ebc69842c5af",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "ad6f9598-e308-4c6c-b751-b576e4423b8a",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "acf9367a-d6de-4d31-b767-5e66a2e3fa14",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "38e487a0-684e-4add-a2c5-3902e62807a8",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "ecca67a9-56be-48bf-b1a5-e8a9ee9d10e7",
            "parentUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "entityUuid" : "60d79156-2028-43e7-93f7-09a8d8545e80",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "1adba78e-3506-4527-a6c3-9327be8a6224",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "f2f9124a-deb0-4485-9dbd-24fcb011458f",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "e857ec13-44d7-414d-a1fa-9ed8dc870e74",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "014a56b6-cc81-4044-9352-98a2c11acdfd",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "e5da45d1-f848-4198-a611-e0188dfce022",
            "parentUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "entityUuid" : "0256112b-b2f5-44e5-be33-69ffeec6a561",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "e5e13598-8f71-461b-a918-75ce314c48ac",
            "parentUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "entityUuid" : "5700be0d-3918-42e0-b066-512fa6c9137a",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "439014d4-aaf9-43e6-b61e-f79854172a17",
            "parentUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "entityUuid" : "84e1d4c8-67f1-4d0e-b897-3b99c4feb9bb",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "e0841550-8e57-47fa-ba20-f91d89d70f16",
            "parentUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "entityUuid" : "87d51804-6741-477b-ae53-3941b5631a81",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "41546d11-4078-4a72-8c94-df850061f19d",
            "parentUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "entityUuid" : "a3d10b12-ae30-48f9-9827-239ea003398d",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "6bf048aa-9a54-4ffd-a301-58ee1e3ef5e7",
            "parentUuid" : "29a8f2cc-696c-4e64-bfae-cba99ca761e1",
            "entityUuid" : "9653cc3e-4350-4610-ad6a-fc9151856be1",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "a704fecd-c385-4067-bce4-920430897d06",
            "parentUuid" : "c704e5d2-7044-4415-8d52-bb621f64b9d6",
            "entityUuid" : "62e4811c-2217-4de9-9266-ff38524efc8c",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "a438677a-2595-4ff6-8b5d-a722a0dca1a1",
            "parentUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "entityUuid" : "72fd2469-3506-4e28-b8b3-f1049baa097f",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "61e7eb23-ac76-4a2a-855a-98b6a8a13a41",
            "parentUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "entityUuid" : "a2ad654d-95ce-4ab0-a853-0416c1c37868",
            "title" : {
                "changed" : true,
                "value" : "In case you are planning to replace this resource with another one in future, add it here"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-09-29T08:25:00.885Z")
},

{
    "id" : "gofair:fip-wizard:4.2.3",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.2.3",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.2.2",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditIntegrationEvent",
            "uuid" : "dcac8be9-5e3a-4f41-97ea-057cc6284b96",
            "parentUuid" : "4c357734-268e-448e-9738-e44f5197da5a",
            "entityUuid" : "39729d58-e7e3-4dac-afbe-8352c95f63e5",
            "id" : {
                "changed" : false
            },
            "name" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : [ 
                    "type"
                ]
            },
            "logo" : {
                "changed" : true,
                "value" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABg2lDQ1BJQ0MgcHJvZmlsZQAAKM+VkTlIA0EYhb9ExQPFwhQiClvENCqIilhKFEVQkCSCV+HuxkQhuwm7ERtLwVaw8Gi8ChtrbS1sBUHwALGytFK0EVn/2QgJQgQHhvl4M+8x8waCBxnTciu7wbLzTmw0qk3PzGrVz9TSRg0dRHTTzU3ERxKUHR+3BNR606Wy+N9oSC66JgQ04UEz5+SFF4T7V/M5xTvCIXNJTwqfCnc6ckHhe6UbBX5RnPY5qDJDTiI2JBwS1tIlbJSwueRYwn3C4aRlS35wusBJxWuKrcyK+XNP9cL6RXsqrnSZrYwyxgSTaBissEyGPF2y2qK4xGQ/Wsbf4vsnxWWIaxlTHMNksdB9P+oPfnfrpnp7Ckn1Uah68ry3dqjegq9Nz/s89LyvI6h4hAu76M8ewMC76JtFLbwPjetwdlnUjG0434Dmh5zu6L5UITOYSsHriXzTDDRdQ91cobeffY7vICFdjV/B7h5E0pI9X+bdNaW9/XnG74/oN8efcslzU3CEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAApk3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZ1XciW5EmT/sYq3BGixHEiz2cEsf44jSVZRleppWql7M5FASPdAINvs//t/jvnf//7nvHfZxFRqbjlb/ostNt/5S7XPf+3+7my8v9//cnz5zr3/3Lx94fko8Gd4/ln6y/Wdz9OPG16f4cb7z019+cbXl4Hc28D3v6An6+/r50nyuX8+dy8TMW2/TLnV8vNUx8tA83XG9cev+Dat5w/927z7oCCllXhQ8H4HF+z9PT4zCM+vzq/G7z40rnP3kxiSuR/5l8EQyLvlvf5p7c8Ceifk17+Zj9J/+9sH4fv+8nn4IMv8IiP+8uUXLn34PLw9xv/84PA2I//+i+r8/rScl1/nrHrOflbXY0ai+cWirrDd6zBcOBB5uLdlfgq/En8v96fxU223E5UvO+3gZ7rmPBI/xkW3XHfH7fvndJMpRr994U/vpw/3sxqKb34G6Snqxx1f0N4KFWVNv00IfOzf5uLuc9t93nSVJy/Hpd4xmJN+v/sxv/ryb37MOVMicra+yYp5eVkW05Dm9DtXoRB3XvSWroBff17Ub3+yH0wVDaYr5soCux3PECO5H7YVrp4D1yX+fFzImbJeBkBEPDspuAQ0YLMLyWVni/fFOeRYUVBn5j5EP9CAS8kvJuljCNmb4qvXs7mnuHutTz57fUxskheFHAq6wb9QVowJ+ymxYkM9hRRTSjmVVE1qqeeQY04555IV5HoJJZZUcimlllZ6DTXWVHMttdZWe/MtEANTy6202lrr3ZvOgzpjda7vfDL8CCOONPIoo442+sR8Zpxp5llmnW325VdYhImVV1l1tdW3M5tIseNOO++y6267H2zthBNPOvmUU087/U1rL1r99PMXWnMvWvNXU7quvGmNT00pr0M4hZMknaExHx0aL9IABu2lM/w5Ri/NSWe2eZwieSaZpBuznDSGCuN2Ph33prsfmvsjvZlU/0hv/neaM1Ld/w/NGVT3WW9faG0pz82rsccLJVMb8D6u6Z4Z+YjssHIfere7tRxqz2UNv8ph5IzDorU9SYZxIZ9w8hzpMDwJ7OwzXNTV5u8u//5q83eXf3+1+XB5nYqpZH7naq9jr5axyXCCAvrJvp6Rkwz9zBl0J5JGetWbWeKohOYyEI/PzTUcZ5Swj1fU9/G4WQba6bX8aljz87gN7f/68u+vNn93+fdXm/8+l+dq89/n8lxt/vtcnqvNX1zeUCBe0APJt9YdDhfYXIFLBEPT11wzjd2ObQNHn8PnlCbh056cT+oT3BCrzLDqUZNwlvn7HmeTt60+WyUlwz9Xaifhri63mZMdIwIefCYczT1bnZ8Gcmc3p7leY67b9rKMSyvsyTOOwFRouPk8Y7j26WKW4oO84QqBIBnx+npyiFf9LdkymFLJ4ecrdR3hgV/ID2cKBMsTk3ue6bXuETb/er3IvFx1px3v73cNWkHYtQeCFoOn6PYiuKxvF2rer5RpDNd5Aknx/RoVxPjj4xrfVmjuEr9Z3yOJ71d4IerLGk3+cN1nZX+3wveiMD+0+dPkf7XGb/RoPivy3/RoPivy3/Rofmexf6pH81mRv9Ujbr5daruUllPdqZGOl+k47K7uLB43uqCcHl9WxCk3U8wjzVN7B56sMFh8zEzQt7jnqm0HYge5YhJqeUpaqZwWEktWbv/h2HLrV69OlWm5Rvo8FQDP3PvGN+PzV3GR5y9/9GcfuTvg624DrLp2ghTEhIxiNRuWAV9xvvQyQDhjkMz9XMATWIZPa3JFIEmBNPweLo++dyuOEQlXY9tWAnDDmpiLnQnEABoAqrHAPtB3cgxVLhxp/AFCqGkHEBAIAQBc7QyNSzqRLy4GjiYIvkBGYvFgm9EiF2AaEc0DlyrzBMuAW5En2ATYxG/ex1jr8uMA1qCmTCMAIvrKbQVm12pymGokAX8nJ4Ln9Ndd3QH2KdkDAxpDmJJyPTWhkbB7ugngxmGWiCz1wdxtcg8I8zgAw6xhX3NEaePM1vGLEQOBjYu9PcIXo2MVPmO/zJdbgtt+7GA1HT86tmc7Yzu/9mYSLNuhgcUwBS7SF1rCHrZ1G8mfWgs4dADpUgLcjeQrOGOkoLuAfTWoJCDthNHc5ovAirYZEtdoM4EGO4pZo6zgunw65bExjQ5IhryuKUDMjMGO85ROApshbQ/aZI7JgHIRUwt+XqQK0AT9pg0MZ3LjLLwKzLS9Bf5qLOwvjTUr2DPZTRzBvHddycx9prvu2Cxrv4LuYOKb+GxmNbjtEGIL3L96cgNzRsS4a5UfOmwUbyf3J9yr5NUlwXgwkbl9nL3ZAPzfcRAQ9sb746z5BpyMj/SUdwsYGFkd+A7OhixgYSLWiAC+cMbcA4vMZP+E0ZXUlhspMyfWgRfltbCeklmg36UP0QaGNmHZUjB07oK+BOBl9sgzI9TFmPhBDqwRyx6j1Yq1MBXsI9m2xz5MqiaWBoVIy2EyCflXxeAzfOoAxqrwdUKBfrhYu57Rjsf2G9THqQQARyBs7nPQRBsG8oNPgh8IgUwmhclKMCyFN56EnZQysyMSjYr37Y7OE+GWS2EXNiMmB4Pxxtlh0UXByCDB2GVphFFWUlxvu8KoPSHAJowN0yBwOA95qChuZqD43BaR5NoMqm0Hmly9H2sltIW2r5Dyngo8yKMzKjYCK7IT6R7vEqgJ1I7p74HiBkAr7lF4dGddaTvsmhgEYIPXxTh6zgC0WIB2ra458QCug7BsgFg9buCeoDMcuxMhgVYYb3Ue8B/FsSpxHfav2Lnk4TUJtge/Kw9XvCGrMCYq8Rm7YT3eZoO1MzwhhcwAT9yYpIvwwHoC2iTzORwTBNejh6pFlxeLnhMsB7EkG+FUeG/cBoJFxIk3wtxMFPNxcR3FKBZXxhxKlUV0rKXLHiVs3zeJEwFOUoJdeD/MMBGmV8eFPBOZ3U3sJEGHdxUlIf8d14/csXalRbyF3HUTOpKE25HkMlorgsSV1fheRaERYoVN5TFrQ8xYJ/KVJZddHAkJuRSg5kD0EmBbSbwH5F8grYVFkMRJC34BiMWxYb0JjkpmynL/ehlpZT1l26ycZUkex0l9ZTYXjQSH9kjcObQ9rdIbHI/Uc0MLdp+uz/cTG/A9ppFSJEHulCF9pMnYI/IrBpRenQoBbuE+dtUYuvIB09gtsT4X0KsNm9mGDN6BCJQYxiAAMLhiXyrJLyx7+lRCrwndWvJIDHmFSDjbvTVZFp+sUB027En+RPWJqAEUZ6+uuRIfCfwmSCUKV0AoZHcJAYOimzrQfwoCIet0eGonCpNNe8tky9YVTAaazQXBWQOK4gmElOTHUzJJLeJXfDgJZ6UqTOE0REFmZLdiNvZOvoC39KYSSktkBTNV/eiZYMoTB4prkVhvHZGCnEusr/jfkzgxCUdyJF3emWNEaNyjM2UVE4lZJe/0ZFnXGZO58VxU0cmWkZiIc2+wIjM+Bay1mgcwNQEuonTWV9EZdwvdcYeAr2IgiCSQMMBeBGeZQhNgUO5pClsNz1pn4xcb28fUEGnDCb1Zsoy6N4k1eK5WilurBNI4BjIqQR9hVsyluOJHUs5eMZA/C4EeJ3CkF4KkWeTmuGpZnRwSM5kcNukHprMDgRBbIjvHpXiLn0zyxwmqoOSWsS/ByUS88AHATvjlt4DkHJmTfF0bmXVkK//EL0GchO4BnuRv9sXe0fNj7/aCnBMNC4t+A9uYd0ud7JYyxgdSBDSQO7qL+LEfKvkq+M6EliuRCAtqewHSAJIHGQlTgxVVKSHbg2dQ1j6e+FsYv3Z8see+fG72wrAUo/0AqQSogkF6+xt4TboRIMY/0s1dF1QLIxRR8g+Y2nxkyy+wOub7Sc3Yt/KaICHOCVl3CcgPfsPzsTnU6HBKwCiRnxjiBjmJLL4zjt0IFDg/lojpTzzSyzIYs5G68XcQK2F7e4wJ6Er8xUgG5BgkHfAbbDYRSGIEtAIQtoOyR89drhB9yyEOwYMgLPyeQVj51p/cozOnpZEMUQphKRLb6iGkIt2IjdTtD3JSJgUs44hMkRSCdhcqJoCT5ggBWMeww/il8iIQChjVrsMK6APyFwzOgUj6IYWDSgl9TkUOoCFgEA6xCIWeYFmOJduyNNQ5C2SH1L29I50A1Ej3+JeYBQJl1USCVZELkA4XFIfDO92KjVV7aWcYaGHFi1kKSiHK4UGnRkWPlvYM0BWwRgbg2s5IYA2yNhiPnEFkh30ReiPxJ5o4FARKDXNXog8owosDKvWpsDaICN63VISLAMCKDh3gPIEU5Av8wW65UDARWeRNpmkRdS4pCJjWrxVpgUngpQAXsSdSsLYE7N2IKwQjnEMFHSAXFKJe+3VJRk28Sw4tgX5nq30BFFBQyTPaSzwB9kBRUBPGlbCv6vSDmcJF0MlERUwel+lNcgz8zCJSvTyoFLokNfgNJmZSxENiXsG+wUrY5pCG94Ed7ayrsU/wDqtFTiM8IWLFB20r6MZc8/IWPrqwJu6UyjALOJyFv2WTkU2bSu0OPuawPU8GIXmCCABa4vsjYNdCDlAaWFJFqOna7e4d9oJ5hJLMQ5gItEQy65Z2ScJrjRWqBcEgDoFmButtmMi2aLVe2L+123KRJKTNNNhKaBljJv/hc2QUeElYAEBhKsj1tazSMKOOz+ONhdkmUGggb0C4SXfQKQOhJKwD0aZAnI2E5BwBq/AkzA2ilvAHh3wZxqt+nkF9BGTNFM5ACtzY79nGgg4YxkesBoANVNmbtUK4AO+1FGA7CbTK2oqSlN+iddAE3B9CPViLKoTFACRPIlfAC+DP2lOcykMeoC9CD4IjMjORuI88MPqb9MJqDeR+QJWdf+B/BnQJqtiiHdgA+UHWWHJVVoVYFxAyHLMqvDrPFAP+DpvxCTDgWKgArmiNsQRkWKVSMFBB2XZtDyzmKjdAnBCA4SJ0VGwNPFeD7NJPBNqVODwAnvD/1EbAOayerCl7jNg7RAXY9JA/J9Pg2cSTtcB+Dvn7u1kHcOIJpDAywza4kCerqcJ6h6mDYSpP2dglkVbJyIOAJ3ZKpiGcazFOlSzYYWKW+ZZcTO1dofnbwsCf1gXMLwsDnfjFqj3Yr1u/0StZBWQFjyIyCAqil3VrYAaecEvM5DExfxUMPIvpcNIExFLNLSqb4nrhx20vd6lyU/B3zN7cwvX9/tbMXq6on4fBEvMvHmE+PIPscx/wY/xvR3/K6K/jm48PeL4OX83y0zN+/tZ8vwhWT5zeuHqYfokzCeE77YgBK1SNhHTDRDOk3R2zRQlBtBuoRgomDx7t/xBoj/MDE7VEdWLj2uIrsa6lXHMUmu+MzoiKOcH0phUuYrSCctyRKJwJiRj2hjMG8bvjpyIJuZBoDFgAyldtwRPjVDY4hVgKPCYAYXHwSqCZJwvADvkKfMoSvMIx6RWGsgf4DJh2yNr5pfCqBKRNreTF1xxBAjlG+VAG0msPO9n3q332u9wXgwCKZuUe8zc3RTLXfN1q+/CtubttH0Xtiv1yYj8/4cP45t0DfvqyfDXLb8bXt+aXi0hYpiN8VXIwdocxEKyG/8pczQBrepUoG9QXNgzKhp9PsbHyFikI5IQnD3QrEAqA1hqoxXmMBmoYxErMmjYOV4EtG4wOSgV0gCmgiJcdlnUh+JFtdxa1sfkFTuokLXj2Rb6ksHjMs6So3c4BhlOx3ofTb5hVvUl7vUekHdRTSUFKp6Q6dYi8Pu8+zbw87qlEkK0Ik1r7vltioNasQmQHBRPhd0qibcjsTkJ49mUOFir6fhovkyDofzMNlvvlwo2m8kyE8V8mQij5ZiqvEvksEPNvEvksEPNvEtE0Lvp2sIrpAlrDZFZfg8Fy3UCp0x1pZJM/BbwhpFstRyRhkl7+eZIYmg25kuj1ezAhrJEG9404LJiJDAbkSVrE1wqYTXO7JQdRs9NJ9tqnhcWN3v9cqN/J1PytUL+Tqfm9UP/MysyvzezPrcz8m0Q+C8T8m0Q+C8R8MrMMEYh7ZDV/pTGdnUUF5wRDBujwvC7CFjIQGaTZSH8zrTXVN9KGhRCOqi1ughTgzGvbRu0RwsU2n0E47FbBTCDMqmwAHBIwIwoSIUt+2csGBKmiXbyapXh+tr2BX0GygLBnHGtfR1L3nV3xw/BGn42YMnEYDDr3OHBREFRyAUj6kJo00pXbJNH35+PXD+9HLKGak1tQ7QH6lVQv/bPnvzzePU8XtIOKnhbjOuWagYq68arbegfevx+/fchHLWtfFGAMxiSDk1t8hcifgoyqV20a4BdJWfrs7SOMUx/6h1ZL6R/W/dMCzeuiP8ki3R3Sr9b9Tn8Q0JggbOT+u+lDwnVNrMgu4tRcSsA/SeAKoI+ccvO36wHCi3Uu9dCNDGCPZsOVJhTpcF3454Xlbv7TwuIPHZt3Sh6f1xM/a65+pWPzC41+XOR7lX5Yt7H/aMkf123+1ZI/GrL52ZK15+AdRhGgS8MBbEKYO9hUXcsRwFTWUm8LkQQTAB+TQfD9JdhksranQyOwtAF1xphg/L2UyqfYx2VNT+Gu7/mwJkd4+PSdefuya5cO/FWhSe7Z+mUmqz8FP7W4lhSghSMX7bNtoLk7FTrVDnjPGWIdoAme6ScPgWifrDZB6Lyw10QiMP3drxy9nQ1oKLzfHal6HXvu5jiM2YDgx1A7sJhFUy3DAtdVyvADqo8VNhhpzVU7eQNQRxwuA9AJLAfGtjgj/BWDdFOjZJQhJgH74MsOlc3NwpM7ARvkP6oayWqo1w9TWG6JskdVa6c72pszVT19bai2tMkth0CtDDJdszMhRHJD0Y7hgkQzRoTTNDVYzKzqjx+Y6LKtFyOMWbCbopbDCJv3gF3tyOHJFovTpj3IBJfPrc+gEi7oRZW4BlmOOXt1hqJ+aO/d5Ex5gWfAxmlIaCq2snT+HQA8mNJakl8uu3ttGEQWhgXOiNG6FRZ2lJL2OuwqYWPra+CJdaJebQLAlgdEMLi4IIQN6UH0cTdIIVQKHHPN5haETIbasKrUZoMkOR/I2hOkFLQds3qDRid4dEiRqzCrqG3n1qoewyKaLJ0c3kwr2uPlH8c1si8MFAkmknqYJUrQ8aiLHq4GdsOJVHrH+/GLRsZFJQC1wNpNyMPl3epG43BKNYFupFLKTqo8qDNie7BY8xZl1OoYAwsOAbMsVQ0TVsE1mR6ZTuvaYtwdQJlSraDFoK4PWCNe0uPMPoy6ovelIevSwCWEb9uAjyureMWMrFhn6HDtvHMraomec2oPz7L2AQKYmPfeAaFDs11EW7tngGmDgLeh/U24azbJTsBqVbk+tFi1cVPk+Dw5EfoWGKIHeyZelqNVue/2ARc1MfBAgCs31LKNNj/Gbk94shEFAFyiswBkbLlpO+jWnayEuOTcqMNiCVu7wMTP1GuChhsuHiUNAjXoG6CLEHNRC4qrAdWiVByj7MVK12jiaN66MvEcnBfnK1JoK0XBP5HVwuxZmzoOt96BZfoJ8ka97sDUsbh2KT32n9TVnHPD0kBE2l9HjtWbXtAR6u+x6+CFthODUm/RXktBdwC+rQYAha2U8eM+ybi4WlSpdapzOLuZjVXhsckUCIZqGpH+Dj/LqfeD1DNqxT865FZ9sA4llqrSXihT2yRqXXC2GZltseGlGzK25FMlDuShPmTIKz6nDSz1Nav9mcjcSU2xJ1+cNiVU8CQOASJUyh2z8Wh1mMAwNh70Zri7krcSMxsLj7Vi393mvXZSmLtG0Iq2901XOCcnYacymtZ4hIwW+0AQC29RY5KbDgDN+ni89wna3zt+vljbVE/BcKYCXStQmou1sZOXJVqim62tSNH6qA4EAh9jhqquCYCxJtbsGqMrSGPNKRuMsWnztDd9fwuhnkW2qbp50I67vH3o6So+Mge/puxCraSz71NV+QlgSO2e+2yrJ75j0bG50DPUREl/ioAMFZVUwo5MsoDnCaW388uuHx1Pw2SUuOQlT30tvhQrZ/4iLaNKVTWw/B0G3EEh16qPLU/30sfWnj03AtJUizjpO66qYAmL8YCjjZ9UbTNcnBDUsxJ6qTWuSTokb8qy1cARk3bShHoK+YGIXJqqwlOtLYB4KExZ2MXGFMvXV5sfl9d7NR4UyDZq40BW8aZq6x7cVEVMiEMQYMwYp00pHkgVyR6nbV7bwbfFCTl5n28oA9h4ElcomehgvTINQa1G7Kdpu2bPE05dmEgXl6nNqD+LlNlluuoXSKrpoECCbJkDRgaxATA5FbL3NcqZGskk5cvVl/VbJclgqqZ0q0VHWeWR54s0H0GInD6iaMwGbxeInOqpfDb7i0KxM8QqHQgi/ALOdPSCmDZSAFTFLNgGVCMOxjmXx6H30WVrN9mA+oDeRG4+agi1jOwAt0DQzrWCDX0RnzSwdt9PYRDyTXMAkQ0c7JA7Qi2T1JGmEpnwCirL6ziXegJ0DEch/IP1vFe8jjIgzAVgX3uT6Yf2YOfeTH6vQjxinXAGBgQU3G1NmaT6ifzSjuKOIB7USpRbY4HRTUq4XyaukRbUl+LeibtoNx5cmbTOqOxO9B8xACRRrKsDxS6wQnNmtApxBZpM4i0xL6ZOHIvJY/a+l9tARFCP6gfcyhh5fNDlI2Kj0sAjZbKq2jBYKOnEqpGsaYeqEkTApiRjnfuCvINs4iBnYEU6aAJ+V1uCGRA0HVsqJGryFEmShUsg+1kxjvtuzT+ErqaAvaEnSHdkEwjJeIc6Aae6poZio5QIoNmKRDJnFjhdz4h1rKXSJ+AOJICMsEHSG/ZsBqTjVd7fPp0sGlDawqhJbWCaC9kginVwPzmB4M/9pGug7SRGAPjI58LpESRNMMPB0tMTKqylRXes870BPzo3L1OQmvFbtdHEl3LUHgR7LErRUwlCXWw7535wWpBudtbPcIUBD6rmzWd7G9+HNqk0N+5GemqJzp9mZX6Yor+BrYBDgFVfXvyT2YI5B8ljFpzvRnfzMbyTY36al/KweOgk1Sre6mAK2AXTUT9PIOSS+Jd2/YHHYMeOx4PRU3xy1tR5n2ibjs+pwyBBzbK2DCHJ9rzWmrz2wBWjEFsOgNFIRk0nkql90Hk7tWQzaTVsqbp5K2Mt5Xr3kdrT8NFUpRwdtI/khJu8iQMs3OBciew2222ZqqreqxgmkqNOzy8/V/V+esw53JMHt4Hmbjd29V8TxJw2BdQA55+mVFLsWfnpaccyBqimgfW0px+3CHRRr5ZRTbE9dX1Gev/lz98924ava9S2QVOOvUvVrA2ZtxNFtZUxnwpslDne3lEm8cUURO3vc16e8jzffPnVffyXAq5P1fJ5tlK6mlLqUz788fhfyeB3IjB/KoPficD8qQx+JwLzpzL4nQjMn8rgdyIwfyqD34nA/KkMficC86cy+J0IzN+6wnciMH/rCt+JwPytK3wnAvO3rvCdCMzfusJ3IjB/6wrficD8rSt8JwLzrxHxowjMv0bEj9+Yf42IH0Vg/jUifhSB+deI+FEE5gsZkO7hMGRxG0UpE5l7xZirtnzAWc+jXhPja15UGFFb51b+JuVDVSCorfEZsphBB4vFslOC7AoLLuEg+OwIQUVL9aup4Tia4WGd+76zQKR/QmY7sE997npgU/1lnRdJdIC1joJ1/xQcuMTnPk4i+KsnNA8VjLPKDQP6Aa3z6iAqqkSdfZZXa7w7q7XnGG9Ql7cwwM3+XXsaG1+DD+zUvr5fmf9thJf7teP3NsLt99r2nsycczxttyCerL2+eIHPApLlxpD50tkhtANJSBJoSmrRXE9HlOCs9W8dUV3FaqBUUsOH6pdb5vP1HIO6LNvsUUWrvNRFBKzRebyqPkh1Vg7Zko62nVUgQbE3nT7PPB1QKWz93TLrt0tLIrceNgCrSytruxnmfVvkq8pLXUVexorZqhl3mjvKyxhCho+AvtZ/HwnadLdD+ft7LZofaqyvk/s4bMJUgjadUpSE51LXJ8btTijq/xFhWCa3ziOGfWDel/P4VugpqHKf1acPF4k1INc1vC3QEbcs5KHimppA1ntV5C6+oOHxzYLvg8yXT9KZ/3L3dT3O/I27vJ+oeXMB3V2/FuSfyNFIkCGO5fWKAC3xlAz4V8EdsrCh69gRg4/w68HN11qqXRXdUV3s6Z75cWktD79CK88R2N7cZRB2td1a6CafuufmYRD82QiUPZWgg4YFTtW2+qphKU6Ubrrtg2t1wnz3gTdunUCJR2EIYe+ZPQwez4n3bM0+jt90pG74pPZARauV1Yz4K+MwX+ts+N+Jvful85DdrpiWd9UsD+tyLlTtWOXiw0Ljd0dGze1emYFo8JwLgUcxNcXh2k4L3vc8Y9lKBkmNAxIz9tAC3te7e774+HkRWxt6S4SHgAWfQ63+0lKlhOJIRys3PFtFTh2zCjpE4V1iiXZmmKyaVbCLzWRHQXn9aXlw+/zom0zFAo9jhtzdyROva60Bgr/X9JA46CTLwD1cVX2KVFZUQUFacOuBZLUzNroLuZKyyZAsgfV3PtwpTCxQJUMEHofVmUN3iEH3hJk6qkXY65pD3ek+8mQ102XT7LOvSSRDwEQbHRBWlbWHQNRdiQSUEzdkFwqSUynL26wtrJwZF0tSrRt8JHOoqFj7Z3nr+IPOLmW7rDrZfZ3aZ6ozqxdRplVaavvoVRwlYTLk3BWhvkZFWVZzXCNdruAuQ44rY50TEWFL2+t44A7nbi3VjWvdzKCDY2s1NUSH6ImQTfslQUfy4P8Bys7KEnZWNsKqCb+D7Styq1U8Hzeg9C3PKQMcOU/r1xJg344MVkl2cgqc8pAu/Kn5lrmRQ4nheNUJPQLutYXJP5HBVs1b23Dc2OLtzx58o6frWRNXs1ezJCOdtcpCC3O3gBqzdhWwBE9UyYW8otRYVJwtyfTQVt6PE+glBteK/BpZ5yyCm6lHfuW1gTcT8WuXDu0Fgr42VNK0Wa9eWBA/jFH9xlvIRk0I/JGXOvqHvw2eYJd038OF9nTwq43b1LmT9l7kv1N7s2Z6HbW2hMN7JMTy95zrPZuFj+m46D0hwXP0uhfSJQle5yZWPVYWpgNyGPExoWqH7WiXWbvJo1huzJUrVAarwACQ1daLmsgyQ6cQCU8uzSwJ6AS5RwsEHVMwjITsPYEHY/YIIgMFyYLbahecpxZVpQdimqkUBF8T2FAnvrjx4B449KhGW/hlYn7ahwb5EfIU8HGnY3WMlztsHrP1HO/27pAD6hBiAHVol5bkkcGJxuHTOjIXdSZLr0CbO0cVm5gXE9URlQEaIqbgHL4oOCQdQ9Ep8awSONZ1Vg0g/2r5QRWEIh2+I+7oCfHMpX5PYvlOHl11Hkjecl2zaCrkx4VBggHUKF4flq3jUMXprVhBL79BLi63sXWkv+t9P/iStpkJ2cMTpbSrukt53goAbrMrQddb0uZnA+a1QgxQumh6fxoPQgkq9Wl5hMmSdFJu6aQxa1tn7Rc3wv5V9mGYUvUeN23zrqWdVULBvFVina/Quw8ShrHHzgDTCtb34hLqHlMm9jpuv5KRpnfphAVVgq0yDs6kem0LOnSmVg6dgB4uTqnWuWG906HgMxO4PEedH7plH/KAXXuPsPGKnIZO9jMqbOG02Grz1qvcrtbAkMlYdUerFv5S79mM7loHwxo/Ym3qUOw6munJGy0OtTLo3BhBHwezgbE3clTPuE58YZ4HmREr5sDcOkHUmcosDwKJ2rfA+3fNmD5+WvXiFZ5435MXSNAA3Nh00vNuqm0iLXmLQCjrUitD71tvebvvDghV+3dKFDpuAIkiyy4VKfFgjCp17wikRKuBvhaBt1f5j9epQ52O8MpWhFTVTo+OtG+JVIdDq97QonAWo3c6XTinTqK4do+/HxdZ+bwtGYboHLreLkV+u1gKkeswZlOzyUiOVIt0dQgi6EgilJEAgciBtG7e+LRWQRxC/oiOpNxILd2Rr0nhjkVGgjK+xzRGykFHtRQtNrrtU5tPkLRFGHdVXSM6dqZd66Z3Ormhdi2dQEg61ut4TqpkKp28LeoEQfpDcxp4frOIOuqcldNpYgyynaAGxk5Uz0t7zerV8K3I5YhoenWHTroBV3Vyj4imY1aeiKkwTFw/QyekZiVCwldE1ob6FhaIQ+l58vDrwtpoS4G86rWvjXHCQgX1HfaYdVwqEsJyb8VUnXpEHdqMLWqMwe1JNsOBA6JOUkY1bU11gzyvc1lEQHRMCppBb7ZwSgo+mDjUxo/hOK+z4FGHtMn8aCM70CmCCWkBZxgdtWD7gIiknkmn9qKGBZGQuA+WzQOvFpvTiXGybJaY+DJlkTlSbwSwStY8Du9F8xikX9i99iuK3nCSB+onQhygBQ7gqnh0QUyetLnj0Vln/F97jkUNPso3UUf+9cqEjmJnFilH1c3EGHWAe3id5Ml6jQihDGciDCXtA5A8SeJu3a1qkKTO+Zd4X1gws2KIw7+QrQHYzaSmNr2SEEYc8WtHyGo3iQ+HXdkw1QsFEvFRitCOR3CEklnwoHJz8DSAdzKnNvvUGlR1ilGn5EIEVBHp8LeQdNInwMtBxRiq9udY37knJ/eBKa9ogcdkfq9DcxMGfrRl3LVNy1oJL4JSs4AKSOeEjqmn95m1D+R1lNJr+urtyN50xcJzD/WfAzIqh4GdFPZ8IUd6akfPl4ReL4bTHnA8DwBe75DTe2vuq3bqLSgxc7W1CfsrDaEt+BbY5DSAhJqOZgWzLtS0iMSovV/qjgsYyIla5GBBOOa0idyYtDWGIZEbXNCx6pFIbOAwhRsgidcGNHx1dUE8FtqBVwYqu5peWbB5EIZNnoPlok/1T+E26aUm4K6DKMg+5aiP35iXr5IOY6orykWRSR3xPXOCrGrrUQfb9FZViLKOGWKGOi9eIrp+W57R+l6XV9+t+vXTfotfPBe0UG+FTb03ACdvn/e1bvJONV2U84vb6zefbr2yAvdE95qzWjvBYvHyNegAWG8HfBMg/br8Z/EfhfLhU+2W8RwijXEJeajzEgPEyoA406oVRB7xN0OaH2P+NGQV92oH5/QVsOjuuyEE0mAGTRhsxVs4YI16vc/VmkpfX33xlMTURqDopCPYtTwSxsajRtcB3QxrKXeO5uMkk17CQKA6+KbLiUlMgCn0gLQDsYddi1eF94oMOuNXb2MloQdHx5yWDoF6O/QWE/5B8IqCu1ZNGnCPUTJwGohZdLz8RbFi4OZpYfqNdkkvAgs260UspOkvTMb8tc0QTJxe9RO0+d9vQUFFDrXnl/nybo/3X/38TfokeMEqwnxGHE1SM1/r63s9ui+Gqz04Az7/OEsVBe9U+nefl88TNC9DRr2wE0BQ1Vb2l8M+m5nvvJpsDKRR30yCnSyWAXj6OOGvpWo+ffXJ1IrmDJKIL+8bUEFcL0i4cdxZvcUJkZofMtXhMftU23RkdXMtsV2vxCR2J+uVnoZOwaq1YJLxvQfGgNGbmk5NKcq1QFUcXoUj5qmACh5QgVIVNiAR3FRlCFszlNJOvWOTZ5Gbs3qe4CRkEb2kQE1QW46iBiYYWVU74V+8Oey+RFF1afUKbt/VeRx0+M/q1SKzNL1fReUpHZPvzzaGTisOssfw/fiG8JcyNFnciFBlYEFLet+weiUQiToHeFhUw2JTw7bXa7EB3PtWhoCh4I772gV4G84D8TBNJ49BJ6S0+0qrpfY6yCpmDAieVsC8Rr05aw29SsA2NR75qVEuOYCtAcq8Ue0EPafyF/L4+c/RYExWL5zQq1yg1GHcIuJS26eH2EywMyhfrUB5LxwBiCSOA4uzFh/OektAJ2gcjwiS3g+ppgoLOoup2wTKB2foHSVAakFcUuSREem9ocA/NUkCRcKtgmrAqlevDlI2oI8h1TCyIeN6SQIYZ6qjE5Fhe0AaxFwF3YsreucXcMj5BQ6AlCQwWjgTombULv1scsls1S8Sw8umAKYVnmHmszm2ZfnA5PsqzF5uE8XrXebfbvt8l/m32z7fZf7ttv+0NL2CqGPmSYzkqX4fNbEAedxMRk020YYO0yvPDUm7ffuJ0884Sld8IcKLGSrTfJ6/UVfzv9z48T7zrzd+vM/8640f7zP/euOP+7pvY+plCkRGYulllnp3G4gFzJFEVfFVqWRnCxWRj8PcINcBTmBVYMQx6/VRGKXxUf/XAG1OEB4heo3kFu7pTJVEYZqt6cxH81kVCygdsdHnFYG0QLL7jmwi92jGjstDOjxghTsBzKYRg/8fSRnaAaWxgFkAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfkCR0ILRY0j6ABAAAVt0lEQVR4Xu2dCXyUxd3Hf3sn2Wx2s8nmvg9CIBwx3ApEBSoFxI8Iti+11dpq9VXR1gutB2oRpRSKRIonCkIVkFIIIAKmGgkQrpBLyJ2QazfZ3WR3s5u90pnneTbZQNAICW7ofvFxn2eeeZ45fjP/mWeeeSa8LgK8eAx87teLh+AVxMPwCuJheAXxMLyCeBhML8tms6Hw7Fl4u1s/HYmJiVAoFKwgarUaL28+irgR47jTXq4lRn0LZseaMHny5B5BVmVXIHH0ZM6Ll2uJQafGFGkFI4i3DfEwvIJ4GF5BPAyvIB6GVxAPwyuIh/E/KUinQYOa0pNo02s5F8/hf1IQY3MZlt8zDhdqazgXz+G6FsTaoUP52TxYrXbOhSUgMg2v7apEfGIy5+I5XNeCmNvrsfKBRTB3WDkXFpFvAFSR8fCT+nMunsOACWIzG9BUXYr6imK063Wcaw9dTjv0zTVorCxFS9MF2G027gyhywmDthGNVaVQX6hCZ2cnd6IHc5sGDZUl0Gma4f7Smd6XjgU5HA7m2NbZgU6LGXarmexbiIcu8muGlWw2KytMl9MBq6UDTqeTOe6G+DW01DPhaNWN5LD3cKvT3smE5XR2wd5pRHP1d1A31F56n6tgQASpOLELL81X4V/vrUTOp2vw9M9G4nT+Me4sYDfrseON+/Dm47/Eoc+ysOmFBVh2bya0OhNJpQ3ffPIKnl4wGQe2rsPONY/hsdlpqCqrZC/ucqDo0Md4dlYosj9aidcXRmHP1g9gs7OZ0Klvxp9mqNBYW4m8z/+OP/9MisJThdj5/Cw8v2A84KjH83OC8eiNftj6j/UAj4jbWotHb5Kirl7N3INiN7fj0MYX8ORt8di78Q0svyMCW7Jeh9FI4sihu1DChHX2+F68s/RX2LX+Wbxweyw+WfcmbI6BEUXI/V4VEv9IPLmlDoFBweDxeJiYuR0rlyzGX3afRHCQHNWn96O0VY4XN+bAx0dMSpodrXXfQSrzg7bmBDZv3oXXtp2BKlhBSiWpLZpawCeIuXf1iT3Y9P5mLN1Zj9DwMFhNf8W+9U+g4EQqxk2azGSwD/G3c/UjCEubhSUfVyAkPAbp4w8is/4U/nz3QizfUwi53I/4JeWPFPouepE7XXZ8tfF5NJiDsPKQBrKAAFifWY2vt67AlrdX4r4/vQSRgMekjZbhM0fP4P4V2yAWCTAzfzdWPHwHpt2+GLFx0ez9roIBqSFRw8dBGaziIgzEjppAWtQKNNaTjCXYzEY4HXbWrJAM4QuEUMWlQSLkkarfQdyccBCRKDySaQEhcQgIkJHK0Ymcj57DgkdeQlhEOHN/iX8Qpt75CI5+dRBdbvkqS5qBO3/3R0TEJEAoEkIgkpBfMb0h+SX7Ynos4nz3RltzBtvfX4fZv3kCAXI5G45Uicy7n0BjzjJUnPuO80lxYtKsBZCIRUxcY0ayryzaTQPThR7QRt1htUDbWA1NcyN86bGDtcFxN9yGUHsBnpozHNvfXob8w7thMBiYc8EJGbhtxli8NFeFTSufQm72VnJ9M3PObmxE3tESfL15OdY/vbB7++dbL6KwrBTuzdD4zNkQ8C8q+f1EU0UyPP5XCAoM4FxYxAFhGJaaiZqy85wLi0weyu0RvYUC5pe2KwPBgAiirStB9vqn8dp907Fn499w9tuDcMsr+AZG4f439uGx1/8BhUyCw8RWr3ryt9C3GcEX+2P+4xvw7Ps5pMrHoGD/e/jz4ltQW1NHUskm8o7H38I9z63v3n7z8masWr2OmBHmNIOPv5zb+/E47LTm9pWhXeQfqb2dvXtpPL5bwAPMVQtibatH1u9HInjkHDy3MRe/eW4tZv7yAaaGuCPyU2D4pNmY8etn8cT6gwh3nsO54lPMOb7IB/FjpmPawkfx0OpszJ93E47mHoCQlNBx6bEwtLXCXxHce5MrqTXqxn2/F/0ouMpIYvurP0Grjq21LqztzSgr/hohsVffNvSXqxfEpMeFFiAsLhkiYqNpQWtrqIJ70jRVBdDrdGymkfNCIoBAIIBQKIahuQJN9aQ2cBnKF4ggIvZZTPzwBL64+d4V+HzDcqibe3pENosBZaeOdF9zOfh80mdxqGE0tTF+TW0kon0QkjwRmT+bjYOfbYDFwna5HdYOHNmZha7YRUgdlc64XQuuupclDU3CbXcuxKoHb8GMu+6D06RGRUUl3K2xpvI0/vHaTIyd+X+IiolG+bHdMEnTkZI2FkbSy1r96DxEZsxDyqixUJcdx6miOjyz7gXm2sTJC3A7eSZ49ZcZyFz0ICQ8C45lf4Rxdy9DUsYUxs/l8FdEIyFKjE3LH0FifCjOVFrw8lvvc2d74IukmP/kO6SntgSv3rsT42+ehfKj/0ZXYBoeXrYWUj8J53PwGZB36jZzG2rPFzEmX6YMR3B4FHRNtfALDIPUn30a7tA3kYe+atIQ2yD0kSEiYQQkEtILIlg72tBcWwaL2UIaSTHC40d0X+dC31hJGvsGEmMBlOEJCAphG1an3Yp2nQa+Aaru+7mjbyyHpqmJ9JoUCI1NJn4kzANeu7YFfooQiEltdEHdm8jDqcloICZWjsiEVKbWu7CTWmMgD73+JF0iVwNGnqP0LWpIZIHw9SVd6yvA/Z26d5KDB+Cd5ODBeAXxMK4PQWjXrs/niKHHkBdEXVeONY/NwaqHZ6Gp5hznOnQZ0oLQ55q8vZ+gNG8fzucfRO6uDy//gDhEGNKCUCsVEpXAHQGhMcOGvOUa8iZr/KxF+MUzb2PGr57C5J8v5lyHLsxziEajwZK/7UBUUhrnPLSoKT2FZtKWTCDiDEVM7TrcM1mFSZMmsYIQoNV63pSY/pKbm4vi4mI8+OCDnMvQIyAggBkVYATh3IYsOTk5KCgowJIlSziXocv18RxyHeEVxMPwCuJhXDeCuCZYDHWYRp1OONi4ZhUCJH3PyvB01A31MOp0SBg5NLvtVocT0+5chJSUlJ73IUVvvYqJyfGcFy/XkpZ2IxoyZvZ+H0I7v7QH7N2u/eYkmwtvo+5heAXxMLyCeBheQTwMwcsEk8kE9bGvERWk4JyvjmatFhpTJ+qamvDt+WoIJD4Ikvqgrb0Nxxta4Qc7vq1sREJIIIwmA7JPnCX+auAQiBGh8IfZbEJBgxaRZN/F2YoqSGVy8Jw2HDxdiJzSSnJfX4QF0Kk3Tuw5fhY8AY/8FqC0SYu4UBUkAj5sNiu+LfkOXxaeR5XWgDhVEETE3WBsx39IHAxaNfacLoW6w87Ehz7N0Gu+KijC4eJyVGj0CAtUwE8shI7E/9/Hz+BUbRNCAgMhG6DHhI5OK4wRiYiOjh6cGlJWW4vnPj8Ih1CCMKkQv1j5IS4YLDB1dGDV3i+QlXMaYYoAdFo6sHTzvxEfHYO5N4zAmcITOFTWAF+xCBs+3QGNhf0Ix2TQ4a//KYWvEHhvdzZ4/krGf25+Hsq19PsNJz7Y/Anyalrx83GjYdTU4eA5duY9DZPvK8cdE9Mhcxjw7pEi1t3cgV+/sxUWsRxzbkjFjt2fkXvRmfhd2Ji9Fwa+H+aSe42OUEJjMJNCYsQzW/ZidPIwTB8WjVX/+hKWAZpg7c6gmaw7Mm5Aekw4pqSl4ZV5Y5BX2cC4N5skePr2WzA6MhhF5WWYPG480qNDmVK4OPMm/G3fUTj5Yiyalo4T1Y3MNQWVVbhr4ki061qQrQbi5T4wWKwYmxCDglp2pnwXT4JbRyRBFSDDhNR4XDCSzCUo5ArclBSFYJkUE1MTsaW0zjWHG+mJaZgYH4ZwZTCmpieh1WyGVkdqTIsE88cmM4UmJToKw8MUKKwoR2pyEoRddlidPIwJEaOGCjjADJog7mUnNDgEWgM7gzwjKRFSITvM0d5ugNJtmqaPSAwzMXEWUkrHpyRj6/FiknlO7D1eiMkJkaRqmzFcIYXR0slsfjIlMmKCmWt5Qh+IhZwJocMoXN/ebrcht6gU6/YexjuHj3WLQZHJAiDgYsrjk6wguwZSc5KiAol7bwwdRiiI2XKFnZYyAirpwI9sDJogDidrbngklaWkhMeo2PZAQOy3izBi5/NrmrvFa9C2IGx8Gnz5PCgCgzFaoEF+RQ1EkcOhIvYqSKEkpbIdw2OikB4fzWxR8u//cPOLvDyoHT74/azpePDWyS6dLotKHoiis5Uw2ns82h0ORKvCoHPwusNNj4uGfBCGmgZNkF15+ThQVIaPvzyMw81dmJoQwZ3pITU+EeG2Zqw5kIcvzxTixe1fYdmcSVykeJg5/gYs2/o5fj6a/XzZx1eGp6cl44VtB5D7XQW591f4upw1a5dDLvXDifJKslXhw4NHmK/avg8/fwVenJVCwvgCOcXn8d7+gzhQVo/k2HjI2uuwPucEvik5h9e37UKj4dKPU6+W7rGswrV0LCuOc746cs+cQb1DhinRAcQu25ASGUoaZAGsVitayHGEXMr5JJAiW92shtZiR1J4SK8BTgcxNxf0RkQqFRC6fR2l0elQTWpKKOnpRCsDmFp4oUWPUGUgRCTDTRYzSKcJKn9f5ovb4toGdAlEiAmSo91iQxS5hvakNEYrIgPZGtZKelBiiV93z4n2FGtJryxUqSRhyJjeF/3+sapJDR2Ja3xoMDG39OvGq0fTbkTTuFm9J1sPtCAXHAH4RUbPFB0vl8ddkEExWT4SCSlpA/KB7/8cgyLI+BEjMHdUDHfk5cfQLQjtKVI7ORAb05Uh//V1zrv1sdH/cTBtCB062f7ZZ8yQgpdrD/2k+qbMTMTFxbGCcO5ePABvlfAwvIJ4GF5BPIzuNmQg13zy8uPh08FNAiMInfm+YcNsJCVd+XohXq6c9nYrxo5dhYyMjJ6hk4qK35NH9zDOi5driVptJvn/kPc7dU9k0AShDzsNDR19vn+wdNig0fZe8uh6QKfpwKlTGugNvVdB/TEMmiA2sxXz7j0GWx99hZpzrdiw/QKzf+ZYHfYfbmL2rxZbhxkrVpyByTJwHZRD2edwouDSRT0vpqq4GSuySqHTWdCovvL3JD+5yVKFyRAf4/Z+5EdgNlhR22DmjkhihEJMnRoGocBtcOgqiU1UIjT4h1cD+nLHOdz3u1G49dZopCZeWXoo10iQy2dQZKwCKUky7siFa9jNnUvdWmvbsHlfzxtDgViEG28Mg0Tk7q+ve7nzfeeApOEqREf2tcpP7+va2uwQ9AqX8kNhX0r3vCydbjeio/t+P61Xm7D/GzWaKlvxwQelqFHbMCJVwaxxePpYPepauxAZ5kMaDhuyskowMiMUfLsDH35UjggFkLW2AF98o0H6uBD4+wrQ2mRESYMN0zICcf6sGsV1VsRG0Ld7ThzaXY5lr53E5/+qAs/XF6lErLISNVa9cQrbdlSgxcxDGgm7tkyDtVlF+Pa4BrXlOsiU/ggJEuHdd85h1FgVhKSo1Vfp8Obr+di0pQy6Th5GDGffPJacasSXR1vx9b4KrF13Fp1iH6Sl0DePl3LsP7XQO0QIUYpwIrcOR87qsX/Heby1vhgiEmZKvD8OfH4em/5ZjqpGMzr5QgxP8Ef+N7V49dUT2JldC3moDHF9ispiMtlJ/o/v/7wsU5sFy1aXIDIlBI8vGYPyvHLs/oqdftNU14YLzZzN7HJi3erS7nbD+I0WaRMjsSZrOuZPkWPVO2XsCTdaidhVDRZm//jhShyvc2LD+7fig/cykRLHJkLkI8HSZVOI2NPRVliNbwv0iEkKxgO/TcUtc5OwdGkGxo4MYATdtLEadO1Nk9aEZ14qwMNPTcC7796MWJ9OfLCdm6tl6ETWP2vw64fGYv3am/D3JUegu0y7U1ehg0bHriDZrjPj0/1NeOhP47DuzQl47P/z0UHCmjE/GTOnqHD/A2MxLzMU3+XXY1deO1aty0TW6sk4lV2C/JLeywdejn6brFFjwpEcK4UyRIr7/zAGWw/+cEPsGBWEqFBfZqbJ9Fmx2PlxGcgz0GXowvaPirBwQTx8xHyIxAJSotkH1bgEOWRSAXikdI+YGII6UhL5ZF8o5IFP2gshqQ702J2ik42YdVcSIlQS5vy0mfH4dE0xzDa223fXrGjISG2VBflgxCgbjJ19dAf7YO7NkfAl8VNG+CHSqQddxZzGgY0Pn6SVh0N7SrHorgRIfQTw8RPjzruGYec+thPzQ1xRG+InFZFuKzvNp7/wSGT9jHZws4MuhdQurd4MCcmkizl/thlvLs/HGyvPIHt/ffe0oe/DSsyAmM544KBDE4IaA6zcxCxxr1fM/bfzIjF3HXfJpXHhwawxMYXFBV2EWd/ev55XvwVpI2bLVanzc+tx53Qls88j/7jhMJjbbGhze/3Fa+wgJZK9qrywBWMWxUN+8XKlLngC3DZ3GE7k9yxUqdNaYLPY8PAf8vHA4xlY+kw6Zt8Szp1lw7ZypubidXPjRwZhDymVFm5+1fliNWLvHQYZKd2DSxfGzEhGbp5r0c4uHDlyAVMn9az1+330eyZCc40e60jjbGo1oaDRiaxVqYx7TIwMz71VQkqFHgaDGe2Vnd2lRt/SgffeLoCvqAu7D6mRtX46yUISRSKgnVtkmWrpysx5i9Pw5qtHUXC8HnyTGc5AOV58ciTm3OqP5StOIkYpRN4xYooWs4UhmHQktr+dA6mpDcnjojD3RiXaSW+HEpWswgO3teG39+dgfJoMRdVW/OWVcaCWjQbnWuSZYrVY+nyApdC4ubSmXzq5f+1kqGXbPgpd+9d16uY5w1Cx9iT++Hwz/DrN8I8jbe+M/g1L9Wssq76sFUvfbcDG5SPQ3NIJVYhvr3lSrRryLCAUQKkQk4Q6ISDmiZ6128k+8adRmxGg9GHaBkoXl0hqb2mCaTpcq1JTsej9BBIRFAF0OW+aWCeam81Q0HtI+L3860ktomHLZaxfGia15S7MJlJriakMUfkSs8W6MWFy4VOYeJJ2zv3dtgsqHHWnbcTFcWWu49JK48h3vwfxqCcPiU4SaCDJlz5u3c0Vj2XxScLDw/x6iUEJIokNCiSBEmeaGa6zzD7xG0KucYlBoW6uzKAJdSWQQj9vDg7xQ6CczWAKTXREpBR+pH252D8VySUcxV0Mii9p78JIx8IlBoW5Bxc+hYlnz2EvqD/qn3Jx2O5pZYRxvwfZp3GjhdTd+YfolyC+MgnmTWXNhJfBpV+CKMP8sXBeJHfkZTDpbkNOn74PEyZ434f8FLS0mMn2KNOGMILQPzF07FjPX8QZapw+fRrl5eVYuHAh5zL0SE1NhUqlYgXh3IYs3vWyvAwaQ14Q+meUqqurSV9eTZ4LrvxNncdATdZQZtu2bdTkMtuWLVs416HLkK8htO1wcfLkSW5v6DLkBbn77rsxatQojBw5Evfccw/nOnS5LnpZFgs7yOfjMzDf/P2UXBeCXE94u70ehlcQD8MriIfhFcTD8AriUQD/BRn4esD+vEKKAAAAAElFTkSuQmCC"
            },
            "requestMethod" : {
                "changed" : false
            },
            "requestUrl" : {
                "changed" : true,
                "value" : "http://purl.org/nanopub/api/find_signed_things?type=${type}&searchterm=+${q}"
            },
            "requestHeaders" : {
                "changed" : false
            },
            "requestBody" : {
                "changed" : false
            },
            "responseListField" : {
                "changed" : false
            },
            "responseIdField" : {
                "changed" : false
            },
            "responseNameField" : {
                "changed" : false
            },
            "itemUrl" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "4da8aae8-7d31-42c2-80cf-99088b3ac08f",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "1a98d12d-8716-4d0e-87ab-c7e9b4ab9527",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/FAIR-Community"
                }
            }
        }
    ],
    "createdAt" : ISODate("2020-09-29T08:48:26.898Z")
},

{
    "id" : "gofair:fip-wizard:4.2.4",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.2.4",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.2.3",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "2c3bd8f8-48ed-459a-9a82-98ca8734974b",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "2a880dab-4f2f-4ab5-aefe-ce4942542a37",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/FAIR-Community"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "5afcf867-c1c4-4de7-82c8-53d92a226b80",
            "parentUuid" : "6a812ff5-a202-40d4-bd3b-02b341512e48",
            "entityUuid" : "2a880dab-4f2f-4ab5-aefe-ce4942542a37",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Identifier-type"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "abeaacd7-7da9-48c2-8135-e1280c567ce4",
            "parentUuid" : "47d618c6-568e-4112-b66a-339661bfc7fc",
            "entityUuid" : "86205ba5-2016-4a4c-a3bf-d0aea015fec5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "Identifier-type"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "9b1701dd-83eb-4c82-b59c-ed0f22b69914",
            "parentUuid" : "47d618c6-568e-4112-b66a-339661bfc7fc",
            "entityUuid" : "86205ba5-2016-4a4c-a3bf-d0aea015fec5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Identifier-type"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "eaf996c0-0198-49cb-b5d0-b511e16e8709",
            "parentUuid" : "797c4af8-0184-43cf-b40c-e2608b7b4d0a",
            "entityUuid" : "8b75db91-a7e6-4053-ba77-431ef0e8d67a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Identifier-type"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "f1ad79f4-e3c2-4945-9765-d44f8ef0a268",
            "parentUuid" : "4f3cfb2a-cbb4-40f5-a151-74c9bcb661bd",
            "entityUuid" : "4a10d70e-2a4e-4ea1-a796-e5d100bc53ea",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Identifier-type"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "a946603a-2191-4de5-85e8-0efd12754131",
            "parentUuid" : "808310c5-7321-4789-aa97-80f4c7ac9fa8",
            "entityUuid" : "cae8352d-a048-49ad-b95f-24454bb5f80a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Metadata-schema"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "99fbfe6f-502a-4551-902e-3860c8f1f07b",
            "parentUuid" : "f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694",
            "entityUuid" : "a57428a6-8dfe-48e3-b846-d4a039ca934c",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Metadata-schema"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "e3d46c6f-2cb6-46f2-a25a-9bac8979f37a",
            "parentUuid" : "faeab073-3569-4bca-a804-c81c0de04a95",
            "entityUuid" : "59d34122-39d7-4587-ae39-de456d7459e2",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Metadata-data-linking-mechanism"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "5515d825-e985-440f-8a5e-46a1192c53f7",
            "parentUuid" : "293aed26-bf2c-446b-9c91-5acc0e354e63",
            "entityUuid" : "e1657f7d-eb02-4baa-a40f-ae0b4ccf973e",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Metadata-data-linking-mechanism"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "eee95c7f-0e38-45af-9ee8-ed9696ed89c1",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "8509fe0d-2225-4230-8c71-991033389df3",
            "title" : {
                "changed" : true,
                "value" : "Choose your resource from FAIRsharing"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "36343096-19f5-4b39-aaee-acb42f570806",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "7bd33eba-28c2-4279-9dff-a2e672697936",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Metadata-data-linking-mechanism"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "c99e1f43-4e39-49b2-9376-cbe600acb811",
            "parentUuid" : "07648d69-41c1-4f7c-bafa-8d93caa32d7c",
            "entityUuid" : "a74f5643-da60-4c93-8b93-bca758dca0cf",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Search-engine"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "03afd3ca-753d-474b-a3ec-57ec1f4f340b",
            "parentUuid" : "a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a",
            "entityUuid" : "7bd33eba-28c2-4279-9dff-a2e672697936",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Search-engine"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "74c58555-46f8-44b3-8d96-614eb1f607f9",
            "parentUuid" : "5f33c2e8-8b95-435c-870a-fd97d91ff8da",
            "entityUuid" : "20abafb3-72f8-4400-9e16-1acc1c61bf38",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Search-engine"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "e96bf95c-fc60-4962-b385-da8a87c8aa2f",
            "parentUuid" : "66665dd7-0d60-4ac6-a2dd-a69495899dd0",
            "entityUuid" : "b28bc881-ad87-4564-ab18-0fa8ac8ac061",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Search-engine"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "8a52a54f-18ca-49f1-a814-adeef8c8eccb",
            "parentUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "entityUuid" : "5746d5e3-3e98-460d-9a2e-61d3e974eab2",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Communication-protocol"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "1803e79d-5eea-4fcb-8ecd-a703d687f395",
            "parentUuid" : "6668dca1-0761-485c-8f6f-2fe66e2f66bf",
            "entityUuid" : "0979af91-88e6-4567-a25f-51dabd63ed30",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Communication-protocol"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "1184afab-3f58-487e-a444-2aa063f28eaa",
            "parentUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "entityUuid" : "0fe3186c-c7c1-4cef-a8e0-820c2823e66d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Communication-protocol"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "cd6bc9a5-f2e2-4d95-bd66-23d2542e18bd",
            "parentUuid" : "ad6f9598-e308-4c6c-b751-b576e4423b8a",
            "entityUuid" : "f5b9bf6d-23ea-429d-a937-d988dfb1f971",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Communication-protocol"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "59740ce6-8b19-4d8b-895a-75e2f6ba6790",
            "parentUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "entityUuid" : "076e4fae-6668-4e84-a9f7-b00f1d33f58e",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Authentication-and-authorization-technique"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "aec68c62-39bf-4980-9b35-e913b060ff9b",
            "parentUuid" : "38e487a0-684e-4add-a2c5-3902e62807a8",
            "entityUuid" : "e46681c4-d398-4a4d-875e-9829fa987301",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Authentication-and-authorization-technique"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "830389a0-e304-4675-9f5c-05fc2933f680",
            "parentUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "entityUuid" : "db02f6cd-0e28-41d9-9ccf-a0e9040c422d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Authentication-and-authorization-technique"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "034bbe34-18de-4596-9663-95e72f51c798",
            "parentUuid" : "60d79156-2028-43e7-93f7-09a8d8545e80",
            "entityUuid" : "76141aaf-1807-4667-a349-1ecdcf08f10b",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Authentication-and-authorization-technique"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "04bb52aa-1694-4cec-ad0c-855e5f02268a",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "ee073efa-c934-4db4-ae87-49b73df11ca5",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which standardized communication protocol do you use for datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "c6b3c465-f27d-421d-a8c8-1be370e09128",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "43ff12a0-22ff-492b-9777-99e2469f5cf1",
            "title" : {
                "changed" : true,
                "value" : "A1.1 Which standardized communication protocol do you use for metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "8479a734-20d8-4639-9d83-196bd0e2ce2c",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2",
            "title" : {
                "changed" : true,
                "value" : "A1.2 Which authentication & authorisation technique do you use for metadata records?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "03c5213f-525e-4161-9a11-919d8a5d3c7e",
            "parentUuid" : "d6ab1374-788b-4cd5-9614-5ec4c69d6cc5",
            "entityUuid" : "d2c28334-7dc9-4804-9f0c-89984240fb3b",
            "title" : {
                "changed" : true,
                "value" : "A1.2 Which authentication & authorisation technique do you use for datasets?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "itemTemplateQuestionUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "dc08c359-178d-4c6b-af23-d94391cab7bd",
            "parentUuid" : "a93c26cc-ca80-4bcf-ac4c-04e8123bbadb",
            "entityUuid" : "f7ab7312-0f7f-4ba9-8141-85352a3115f4",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Metadata-longevity-plan"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "9d7aa73a-a110-429f-afa6-9fa3a0378fbd",
            "parentUuid" : "f2f9124a-deb0-4485-9dbd-24fcb011458f",
            "entityUuid" : "3d871bd7-06a4-41f4-858b-37211e30f332",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Metadata-longevity-plan"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "f9b89487-bf10-4144-9e28-735d7274a86f",
            "parentUuid" : "a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8",
            "entityUuid" : "e3dd2327-0eaa-4ec2-8feb-9d66a78ec4c2",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Knowledge-representation-language"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "9ee694a5-cd0c-436d-9a83-3a0331a4fbc1",
            "parentUuid" : "014a56b6-cc81-4044-9352-98a2c11acdfd",
            "entityUuid" : "2088b12c-1639-4db7-b4ca-00a89e3eaeb3",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Knowledge-representation-language"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "fcc57c81-d817-438b-bf0d-227abaa8a459",
            "parentUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "entityUuid" : "8f9e5e00-77e4-4332-8270-a1a4257420ea",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/structured-vocabulary"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "463988c9-14e7-4237-a569-b69f2a5e617f",
            "parentUuid" : "5700be0d-3918-42e0-b066-512fa6c9137a",
            "entityUuid" : "c10f580d-f14c-4d8a-bb41-5ea45dc8dbc5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/structured-vocabulary"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "b4b39843-a016-456f-9834-1e49891f3eaf",
            "parentUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "entityUuid" : "40dbe55a-a532-4af2-a602-ca9fddae9412",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/structured-vocabulary"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "cc158798-9c79-479c-b1e7-468939ec153e",
            "parentUuid" : "84e1d4c8-67f1-4d0e-b897-3b99c4feb9bb",
            "entityUuid" : "d71e4483-6b8b-4022-a25e-d4349f1dbf87",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/structured-vocabulary"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "dd0eebb7-45ea-48df-8377-28df5e4f2956",
            "parentUuid" : "53120a47-9151-42d4-bd33-4fd91fa9a48a",
            "entityUuid" : "219f86b7-88d4-466d-8748-1dcf88fc06b6",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Knowledge-representation-language"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "4015b827-7670-41b3-a0e9-37861dc621d1",
            "parentUuid" : "0256112b-b2f5-44e5-be33-69ffeec6a561",
            "entityUuid" : "bf2a6eb8-8d75-434f-813d-ccad06444c1d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Knowledge-representation-language"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "4e3fb7cc-b087-48a7-aeee-d64fbd29eee5",
            "parentUuid" : "e712930b-8a6d-474e-b6da-e2fd0e50ab68",
            "entityUuid" : "1e33211f-25e5-408c-a2a6-5dc9e06c6606",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Data-schema"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "ec38b66c-3a14-4650-bba1-60de4b6a3e82",
            "parentUuid" : "87d51804-6741-477b-ae53-3941b5631a81",
            "entityUuid" : "9d3ad18c-2055-4d13-b2d0-0bd3503da2cb",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Data-schema"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "44ea5c05-dd5c-4a73-befa-e5daef408610",
            "parentUuid" : "10ba5624-d948-4f1a-91c1-61f33ec1e51b",
            "entityUuid" : "b8bc1ffb-64c8-42a6-b5cc-50e2c9813a1f",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Data-schema"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "7ce3ba11-ba8f-48c2-a895-3ff812a9835e",
            "parentUuid" : "a3d10b12-ae30-48f9-9827-239ea003398d",
            "entityUuid" : "59b3e9d1-4481-491b-bfc9-f431324f08e6",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Data-schema"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "4e9f9c72-9e98-4ced-b63b-686cb6d856d2",
            "parentUuid" : "f6b5b347-6e01-4294-a0e3-d64382bea1e9",
            "entityUuid" : "c88733b2-e294-419b-81bf-27206542668a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Provenance-model"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "d0ae620a-0baa-47da-b8fb-674bdbd1fcd6",
            "parentUuid" : "72fd2469-3506-4e28-b8b3-f1049baa097f",
            "entityUuid" : "fa4b80dc-7427-4cf6-8299-4082eb1fcd0c",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Provenance-model"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "5a0f7b50-1ae6-4825-8be6-468ee23e875a",
            "parentUuid" : "08aae90c-ba61-4c78-b3bd-eb92d29e8111",
            "entityUuid" : "abe255a0-7e65-4950-b2ae-47ac8ac30cc1",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Provenance-model"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "3683f112-1fac-41d9-8671-f3ad9ec59622",
            "parentUuid" : "a2ad654d-95ce-4ab0-a853-0416c1c37868",
            "entityUuid" : "83fdf983-73d3-4b6e-a9c5-58c91de07aa4",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Provenance-model"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "735bda02-767d-4288-9c25-534ccda1d23a",
            "parentUuid" : "84e1d4c8-67f1-4d0e-b897-3b99c4feb9bb",
            "entityUuid" : "d71e4483-6b8b-4022-a25e-d4349f1dbf87",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Structured-vocabulary"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "d91bf60d-6bda-478f-ac43-1c22a5d0d5cd",
            "parentUuid" : "bc3f2a07-6921-4693-8e09-4caf408d162a",
            "entityUuid" : "40dbe55a-a532-4af2-a602-ca9fddae9412",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Structured-vocabulary"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "3755322a-dfe4-400b-b545-34e2e9be4777",
            "parentUuid" : "5700be0d-3918-42e0-b066-512fa6c9137a",
            "entityUuid" : "c10f580d-f14c-4d8a-bb41-5ea45dc8dbc5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Structured-vocabulary"
                }
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "ca08138f-48b9-4fd6-9c29-76ab654578ea",
            "parentUuid" : "aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d",
            "entityUuid" : "8f9e5e00-77e4-4332-8270-a1a4257420ea",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/Structured-vocabulary"
                }
            }
        }
    ],
    "createdAt" : ISODate("2020-09-29T12:58:56.483Z")
},

{
    "id" : "gofair:fip-wizard:4.2.5",
    "name" : "FIP Wizard",
    "organizationId" : "gofair",
    "kmId" : "fip-wizard",
    "version" : "4.2.5",
    "metamodelVersion" : 5,
    "description" : "Questionnaire prompting Communities committed to implementation of the FAIR Principles to explicitly declare their FAIR implementation choices (the output of the Wizard is a community-specific FAIR Implementation Profile, or FIP).",
    "readme" : "# FIP Questionnaire\n\nThe FIP questionnaire prompts communities to explicitly declare their FAIR Implementation Profiles.\n\nThis knowledge model has been created under the [GO FAIR Convergence Matrix Project](https://www.go-fair.org/today/fair-matrix). For more information, visit the [3-point FAIRification Framework](https://www.go-fair.org/how-to-go-fair/).\n\nThis knowledge model can be used in any DSW instance for testing and training purposes, however, please fill-in your actual FIPs in the **[FIP Wizard](https://fair-matrix.ds-wizard.org)** to share them with the community. Please report any issues and comments there.",
    "license" : "Apache-2.0",
    "previousPackageId" : "gofair:fip-wizard:4.2.4",
    "forkOfPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "mergeCheckpointPackageId" : "gofair:fair-convergence-matrix:3.0.0",
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "4a833246-a650-4caa-8c5c-d29a16b79d31",
            "parentUuid" : "63eecafc-fdda-47d3-92d2-d58fad54588d",
            "entityUuid" : "1a98d12d-8716-4d0e-87ab-c7e9b4ab9527",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "type" : "https://w3id.org/fair/fip/terms/FAIR-Implementation-Community"
                }
            }
        }
    ],
    "createdAt" : ISODate("2020-09-30T06:25:11.378Z")
}

    ])

db.getCollection("templates").insert({
    "id" : "gofair:fip-nanopub:0.3.0",
    "name" : "FIP Nanopub",
    "organizationId" : "gofair",
    "templateId" : "fip-nanopub",
    "version" : "0.3.0",
    "metamodelVersion" : 2,
    "description" : "FAIR Implementation Profile as Nanopublication",
    "readme" : "# FAIR Implementation Profile as Nanopublication",
    "license" : "apache-2",
    "allowedPackages" : [ 
        {
            "orgId" : "gofair",
            "kmId" : "fip-wizard",
            "minVersion" : "4.2.3",
            "maxVersion" : null
        }
    ],
    "recommendedPackageId" : "gofair:fip-wizard:4.2.3",
    "formats" : [ 
        {
            "uuid" : "9c7d572e-c273-4323-97a4-ab38f943c33a",
            "name" : "TriG (RDF)",
            "shortName" : "trig",
            "icon" : "fas fa-share-alt",
            "color" : "#f15a24",
            "steps" : [ 
                {
                    "name" : "jinja",
                    "options" : {
                        "content-type" : "application/trig",
                        "extension" : "trig",
                        "template" : "content/nanopub.trig.j2"
                    }
                }
            ]
        }
    ],
    "files" : [ 
        {
            "uuid" : "1e008d36-9449-4339-9196-02c3c028d2fe",
            "fileName" : "content/nanopub.trig.j2",
            "content" : "{%- import \"content/_triples.j2\" as triples with context -%}\n@prefix : <http://purl.org/nanopub/temp/fip-delaration-np/{{ ctx.uuid }}#> .\n@prefix fip: <https://w3id.org/fair/fip/terms/> .\n@prefix fair: <https://w3id.org/fair/principles/terms/> .\n@prefix np: <http://www.nanopub.org/nschema#> .\n@prefix npx: <http://purl.org/nanopub/x/> .\n@prefix prov: <http://www.w3.org/ns/prov#> .\n@prefix dct: <http://purl.org/dc/terms/> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix orcid: <https://orcid.org/> .\n\n:Head {\n  : a np:Nanopublication;\n    np:hasAssertion :assertion ;\n    np:hasProvenance :provenance ;\n    np:hasPublicationInfo :pubinfo .\n}\n\n:assertion {\n{%- for triple in triples.triples %}\n  {%- if triple|length == 3 %}\n  {{ triple[0] }} {{ triple[1] }} {{ triple[2] }} .\n  {%- elif triple|length == 1 %}\n  # {{ triple[0] }}\n  {%- else %}\n  #================================================\n  {%- endif %}\n{%- endfor %}\n}\n\n:provenance {\n  {%- if triples.orcid %}\n  :assertion dct:creator orcid:{{ triples.orcid }} .\n  {%- else %}\n  :assertion dct:creator \"unknown\" .\n  {%- endif %}\n}\n\n:pubinfo {\n  : dct:created \"{{ ctx.updatedAt|datetime_format(\"%Y-%m-%dT%H:%M:%SZ\") }}\"^^xsd:dateTime ;\n    dct:creator <{{ ctx.config.clientUrl }}> ;\n    dct:license <https://creativecommons.org/publicdomain/zero/1.0/> .\n}\n"
        }, 
        {
            "uuid" : "36c95f58-95f8-4ff8-bbec-53868bd815ac",
            "fileName" : "content/_definition.j2",
            "content" : "{#- All UUIDs that are needed -#}\n{%- set questions = [\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-F1-D\",\n    \"type\": \"normal\",\n    \"chapter\": \"e3301b05-b02d-4c09-bb4b-7fb181414236\",\n    \"declaration\": \"6a812ff5-a202-40d4-bd3b-02b341512e48\",\n    \"consideration\": \"6318940e-d311-4102-836e-77dc0f2838f1\",\n    \"c_fairsharing\": \"eb623708-368e-49ef-b093-3ed5a12986c1\",\n    \"c_nanobench\": \"2a880dab-4f2f-4ab5-aefe-ce4942542a37\",\n    \"c_options\": \"x\",\n    \"planning\": \"47d618c6-568e-4112-b66a-339661bfc7fc\",\n    \"p_fairsharing\": \"f4ac44a5-be25-4b6f-b4a9-d7da4b139638\",\n    \"p_nanobench\": \"86205ba5-2016-4a4c-a3bf-d0aea015fec5\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-F1-MD\",\n    \"type\": \"normal\",\n    \"chapter\": \"e3301b05-b02d-4c09-bb4b-7fb181414236\",\n    \"declaration\": \"797c4af8-0184-43cf-b40c-e2608b7b4d0a\",\n    \"consideration\": \"891413be-e42d-409c-967f-a2e271777aab\",\n    \"c_fairsharing\": \"770c6137-7359-4e34-89a2-17708645cbe1\",\n    \"c_nanobench\": \"8b75db91-a7e6-4053-ba77-431ef0e8d67a\",\n    \"c_options\": \"x\",\n    \"planning\": \"4f3cfb2a-cbb4-40f5-a151-74c9bcb661bd\",\n    \"p_fairsharing\": \"7dfc2257-9eca-4e14-ba0f-d8e52fe26707\",\n    \"p_nanobench\": \"4a10d70e-2a4e-4ea1-a796-e5d100bc53ea\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-F2\",\n    \"type\": \"normal\",\n    \"chapter\": \"e3301b05-b02d-4c09-bb4b-7fb181414236\",\n    \"declaration\": \"808310c5-7321-4789-aa97-80f4c7ac9fa8\",\n    \"consideration\": \"b351f7d6-7b0a-43e6-a845-d82d27040435\",\n    \"c_fairsharing\": \"d975599c-e3de-4acd-9370-0ff6537b888a\",\n    \"c_nanobench\": \"cae8352d-a048-49ad-b95f-24454bb5f80a\",\n    \"c_options\": \"x\",\n    \"planning\": \"f0ef2043-8c9b-4aa5-9a3b-2c5474a5a694\",\n    \"p_fairsharing\": \"ff940eb5-b2b6-4f06-b85c-c883cacb3c4e\",\n    \"p_nanobench\": \"a57428a6-8dfe-48e3-b846-d4a039ca934c\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-F3\",\n    \"type\": \"only_nanobench\",\n    \"chapter\": \"e3301b05-b02d-4c09-bb4b-7fb181414236\",\n    \"declaration\": \"faeab073-3569-4bca-a804-c81c0de04a95\",\n    \"consideration\": \"be91f639-06e5-4d65-9375-d04bcf3af66b\",\n    \"c_fairsharing\": \"x\",\n    \"c_nanobench\": \"59d34122-39d7-4587-ae39-de456d7459e2\",\n    \"c_options\": \"x\",\n    \"planning\": \"293aed26-bf2c-446b-9c91-5acc0e354e63\",\n    \"p_fairsharing\": \"x\",\n    \"p_nanobench\": \"e1657f7d-eb02-4baa-a40f-ae0b4ccf973e\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-F4-D\",\n    \"type\": \"normal\",\n    \"chapter\": \"e3301b05-b02d-4c09-bb4b-7fb181414236\",\n    \"declaration\": \"a50aa1e1-68a9-4e36-bdb6-4a4c5a3d902a\",\n    \"consideration\": \"01e9538b-0246-4ae1-a60b-c870bd2f7f10\",\n    \"c_fairsharing\": \"8509fe0d-2225-4230-8c71-991033389df3\",\n    \"c_nanobench\": \"7bd33eba-28c2-4279-9dff-a2e672697936\",\n    \"c_options\": \"x\",\n    \"planning\": \"07648d69-41c1-4f7c-bafa-8d93caa32d7c\",\n    \"p_fairsharing\": \"0d32ff1a-201b-4425-a830-b3b3aef4a0bb\",\n    \"p_nanobench\": \"a74f5643-da60-4c93-8b93-bca758dca0cf\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-F4-MD\",\n    \"type\": \"normal\",\n    \"chapter\": \"e3301b05-b02d-4c09-bb4b-7fb181414236\",\n    \"declaration\": \"5f33c2e8-8b95-435c-870a-fd97d91ff8da\",\n    \"consideration\": \"f321f449-7937-40da-9702-0df364a17fb5\",\n    \"c_fairsharing\": \"3ded4b7d-fc8a-4386-b96f-34f0d681cf57\",\n    \"c_nanobench\": \"20abafb3-72f8-4400-9e16-1acc1c61bf38\",\n    \"c_options\": \"x\",\n    \"planning\": \"66665dd7-0d60-4ac6-a2dd-a69495899dd0\",\n    \"p_fairsharing\": \"303abfbd-d135-4f1f-bc57-2b842ae4065a\",\n    \"p_nanobench\": \"b28bc881-ad87-4564-ab18-0fa8ac8ac061\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-A1-D\",\n    \"type\": \"only_nanobench\",\n    \"chapter\": \"d6ab1374-788b-4cd5-9614-5ec4c69d6cc5\",\n    \"declaration\": \"43ff12a0-22ff-492b-9777-99e2469f5cf1\",\n    \"consideration\": \"d06cdad0-f322-4376-be83-0dffa3ea6ff2\",\n    \"c_fairsharing\": \"x\",\n    \"c_nanobench\": \"5746d5e3-3e98-460d-9a2e-61d3e974eab2\",\n    \"c_options\": \"x\",\n    \"planning\": \"6668dca1-0761-485c-8f6f-2fe66e2f66bf\",\n    \"p_fairsharing\": \"x\",\n    \"p_nanobench\": \"0979af91-88e6-4567-a25f-51dabd63ed30\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-A1-MD\",\n    \"type\": \"only_nanobench\",\n    \"chapter\": \"d6ab1374-788b-4cd5-9614-5ec4c69d6cc5\",\n    \"declaration\": \"ee073efa-c934-4db4-ae87-49b73df11ca5\",\n    \"consideration\": \"c74cecef-cc36-45c9-8400-7a6a56ca4e2d\",\n    \"c_fairsharing\": \"x\",\n    \"c_nanobench\": \"0fe3186c-c7c1-4cef-a8e0-820c2823e66d\",\n    \"c_options\": \"x\",\n    \"planning\": \"ad6f9598-e308-4c6c-b751-b576e4423b8a\",\n    \"p_fairsharing\": \"x\",\n    \"p_nanobench\": \"f5b9bf6d-23ea-429d-a937-d988dfb1f971\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-A1.1-D\",\n    \"type\": \"only_nanobench\",\n    \"chapter\": \"d6ab1374-788b-4cd5-9614-5ec4c69d6cc5\",\n    \"declaration\": \"2ddde9e8-4284-4b61-b5a7-8b0e8f8b28c2\",\n    \"consideration\": \"c4d90bd6-0154-4bd9-ab7f-72f6f913625a\",\n    \"c_fairsharing\": \"x\",\n    \"c_nanobench\": \"076e4fae-6668-4e84-a9f7-b00f1d33f58e\",\n    \"c_options\": \"x\",\n    \"planning\": \"38e487a0-684e-4add-a2c5-3902e62807a8\",\n    \"p_fairsharing\": \"x\",\n    \"p_nanobench\": \"e46681c4-d398-4a4d-875e-9829fa987301\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-A1.1-MD\",\n    \"type\": \"only_nanobench\",\n    \"chapter\": \"d6ab1374-788b-4cd5-9614-5ec4c69d6cc5\",\n    \"declaration\": \"d2c28334-7dc9-4804-9f0c-89984240fb3b\",\n    \"consideration\": \"7e256841-6b67-4fd5-bc6f-51a80f91c991\",\n    \"c_fairsharing\": \"x\",\n    \"c_nanobench\": \"db02f6cd-0e28-41d9-9ccf-a0e9040c422d\",\n    \"c_options\": \"x\",\n    \"planning\": \"60d79156-2028-43e7-93f7-09a8d8545e80\",\n    \"p_fairsharing\": \"x\",\n    \"p_nanobench\": \"76141aaf-1807-4667-a349-1ecdcf08f10b\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-A1.2\",\n    \"type\": \"only_nanobench\",\n    \"chapter\": \"d6ab1374-788b-4cd5-9614-5ec4c69d6cc5\",\n    \"declaration\": \"a93c26cc-ca80-4bcf-ac4c-04e8123bbadb\",\n    \"consideration\": \"ed203074-d9df-47bc-80ed-abf3283f3aa8\",\n    \"c_fairsharing\": \"x\",\n    \"c_nanobench\": \"f7ab7312-0f7f-4ba9-8141-85352a3115f4\",\n    \"c_options\": \"x\",\n    \"planning\": \"f2f9124a-deb0-4485-9dbd-24fcb011458f\",\n    \"p_fairsharing\": \"x\",\n    \"p_nanobench\": \"3d871bd7-06a4-41f4-858b-37211e30f332\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-I1-D\",\n    \"type\": \"normal\",\n    \"chapter\": \"2b7ee188-a227-43a8-8bf9-a99e6aeb3939\",\n    \"declaration\": \"a07fc6d6-1f8c-4c21-9bf5-1040682fa5b8\",\n    \"consideration\": \"0a43f23d-6261-4359-bcfb-2f58f3303c49\",\n    \"c_fairsharing\": \"b05cbdda-1636-4c38-86c6-5b4820950e11\",\n    \"c_nanobench\": \"e3dd2327-0eaa-4ec2-8feb-9d66a78ec4c2\",\n    \"c_options\": \"x\",\n    \"planning\": \"014a56b6-cc81-4044-9352-98a2c11acdfd\",\n    \"p_fairsharing\": \"2efe903b-751e-45c8-a26c-bfe25515449e\",\n    \"p_nanobench\": \"2088b12c-1639-4db7-b4ca-00a89e3eaeb3\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-I1-MD\",\n    \"type\": \"normal\",\n    \"chapter\": \"2b7ee188-a227-43a8-8bf9-a99e6aeb3939\",\n    \"declaration\": \"53120a47-9151-42d4-bd33-4fd91fa9a48a\",\n    \"consideration\": \"fff28ddd-d34c-4dc9-8a20-ba26280eb39a\",\n    \"c_fairsharing\": \"68718ac7-b88a-47ce-86e6-5827e7834b89\",\n    \"c_nanobench\": \"219f86b7-88d4-466d-8748-1dcf88fc06b6\",\n    \"c_options\": \"x\",\n    \"planning\": \"0256112b-b2f5-44e5-be33-69ffeec6a561\",\n    \"p_fairsharing\": \"6a8028fa-c546-4b0f-985b-6dc1ef20a56e\",\n    \"p_nanobench\": \"bf2a6eb8-8d75-434f-813d-ccad06444c1d\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-I2-D\",\n    \"type\": \"normal\",\n    \"chapter\": \"2b7ee188-a227-43a8-8bf9-a99e6aeb3939\",\n    \"declaration\": \"aea4c5be-aaa3-4e27-a6d6-f2e6af0bc43d\",\n    \"consideration\": \"55040213-7a86-416a-8eb6-85f05711587d\",\n    \"c_fairsharing\": \"48476982-e866-4feb-94f8-5b2b5d423c61\",\n    \"c_nanobench\": \"8f9e5e00-77e4-4332-8270-a1a4257420ea\",\n    \"c_options\": \"x\",\n    \"planning\": \"5700be0d-3918-42e0-b066-512fa6c9137a\",\n    \"p_fairsharing\": \"11059789-bf7a-4b0b-9663-411de782aa49\",\n    \"p_nanobench\": \"c10f580d-f14c-4d8a-bb41-5ea45dc8dbc5\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-I2-MD\",\n    \"type\": \"normal\",\n    \"chapter\": \"2b7ee188-a227-43a8-8bf9-a99e6aeb3939\",\n    \"declaration\": \"bc3f2a07-6921-4693-8e09-4caf408d162a\",\n    \"consideration\": \"4f91161c-d968-4387-8264-0ba4e05f8f5a\",\n    \"c_fairsharing\": \"9f02dcd1-fed5-481d-bea5-577303523853\",\n    \"c_nanobench\": \"40dbe55a-a532-4af2-a602-ca9fddae9412\",\n    \"c_options\": \"x\",\n    \"planning\": \"84e1d4c8-67f1-4d0e-b897-3b99c4feb9bb\",\n    \"p_fairsharing\": \"08eb78d4-643a-41c3-9301-70302e7a00cd\",\n    \"p_nanobench\": \"d71e4483-6b8b-4022-a25e-d4349f1dbf87\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-I3-D\",\n    \"type\": \"normal\",\n    \"chapter\": \"2b7ee188-a227-43a8-8bf9-a99e6aeb3939\",\n    \"declaration\": \"e712930b-8a6d-474e-b6da-e2fd0e50ab68\",\n    \"consideration\": \"f423b127-9fce-4435-8d5b-44a36815f8fa\",\n    \"c_fairsharing\": \"ae187e7b-b7f6-447a-beae-35c7e1402cbc\",\n    \"c_nanobench\": \"1e33211f-25e5-408c-a2a6-5dc9e06c6606\",\n    \"c_options\": \"x\",\n    \"planning\": \"87d51804-6741-477b-ae53-3941b5631a81\",\n    \"p_fairsharing\": \"2ca1f907-5e7e-4839-9cfd-b0aea80d080d\",\n    \"p_nanobench\": \"9d3ad18c-2055-4d13-b2d0-0bd3503da2cb\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-I3-MD\",\n    \"type\": \"normal\",\n    \"chapter\": \"2b7ee188-a227-43a8-8bf9-a99e6aeb3939\",\n    \"declaration\": \"10ba5624-d948-4f1a-91c1-61f33ec1e51b\",\n    \"consideration\": \"baca3035-1f3c-4964-b8f5-26182ca7f446\",\n    \"c_fairsharing\": \"38a47f4a-1544-4867-b2f3-abbf4b12b20e\",\n    \"c_nanobench\": \"b8bc1ffb-64c8-42a6-b5cc-50e2c9813a1f\",\n    \"c_options\": \"x\",\n    \"planning\": \"a3d10b12-ae30-48f9-9827-239ea003398d\",\n    \"p_fairsharing\": \"830ca9fb-ddb4-483b-8584-68f921d560e1\",\n    \"p_nanobench\": \"59b3e9d1-4481-491b-bfc9-f431324f08e6\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-R1.1-D\",\n    \"type\": \"options\",\n    \"chapter\": \"37e3ef76-71e1-47a9-be84-e1f1d9452193\",\n    \"declaration\": \"29a8f2cc-696c-4e64-bfae-cba99ca761e1\",\n    \"consideration\": \"312b5818-cdd3-43dc-bcf1-bb9788a88f19\",\n    \"c_fairsharing\": \"x\",\n    \"c_nanobench\": \"x\",\n    \"c_options\": \"812fc813-effa-4183-909c-bbc4154730e3\",\n    \"planning\": \"9653cc3e-4350-4610-ad6a-fc9151856be1\",\n    \"p_fairsharing\": \"x\",\n    \"p_nanobench\": \"x\",\n    \"p_options\": \"615f99cf-275a-42b6-bc48-405021cfaf66\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-R1.1-MD\",\n    \"type\": \"options\",\n    \"chapter\": \"37e3ef76-71e1-47a9-be84-e1f1d9452193\",\n    \"declaration\": \"c704e5d2-7044-4415-8d52-bb621f64b9d6\",\n    \"consideration\": \"cacd776b-b531-4487-bd53-a61dd9653b12\",\n    \"c_fairsharing\": \"x\",\n    \"c_nanobench\": \"x\",\n    \"c_options\": \"55b072f8-f2b7-4cf6-be7f-19fd48ccf069\",\n    \"planning\": \"62e4811c-2217-4de9-9266-ff38524efc8c\",\n    \"p_fairsharing\": \"x\",\n    \"p_nanobench\": \"x\",\n    \"p_options\": \"c8a3a31e-e184-4e53-90fa-c9b6886382a5\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-R1.2-D\",\n    \"type\": \"normal\",\n    \"chapter\": \"37e3ef76-71e1-47a9-be84-e1f1d9452193\",\n    \"declaration\": \"f6b5b347-6e01-4294-a0e3-d64382bea1e9\",\n    \"consideration\": \"53319468-f864-488c-aa6c-995f21cf9207\",\n    \"c_fairsharing\": \"4f344af5-84ef-4613-bbeb-4509b949ca62\",\n    \"c_nanobench\": \"c88733b2-e294-419b-81bf-27206542668a\",\n    \"c_options\": \"x\",\n    \"planning\": \"72fd2469-3506-4e28-b8b3-f1049baa097f\",\n    \"p_fairsharing\": \"52980e65-1841-4426-af2e-5609f62b1c29\",\n    \"p_nanobench\": \"fa4b80dc-7427-4cf6-8299-4082eb1fcd0c\",\n    \"p_options\": \"x\"\n  },\n  {\n    \"purl\": \"https://w3id.org/fair/fip/terms/FIP-Question-R1.2-MD\",\n    \"type\": \"normal\",\n    \"chapter\": \"37e3ef76-71e1-47a9-be84-e1f1d9452193\",\n    \"declaration\": \"08aae90c-ba61-4c78-b3bd-eb92d29e8111\",\n    \"consideration\": \"b5a6c104-b267-48c8-851c-7ee603bf7838\",\n    \"c_fairsharing\": \"c358894e-a82a-4536-8c5d-cbc4183d82c2\",\n    \"c_nanobench\": \"abe255a0-7e65-4950-b2ae-47ac8ac30cc1\",\n    \"c_options\": \"x\",\n    \"planning\": \"a2ad654d-95ce-4ab0-a853-0416c1c37868\",\n    \"p_fairsharing\": \"1b061704-78ed-42db-a175-0f0f59fc1b99\",\n    \"p_nanobench\": \"83fdf983-73d3-4b6e-a9c5-58c91de07aa4\",\n    \"p_options\": \"x\"\n  }\n] -%}\n\n{%- set communityUuid = \"1a98d12d-8716-4d0e-87ab-c7e9b4ab9527\" -%}\n{%- set communityPath = \"63eecafc-fdda-47d3-92d2-d58fad54588d.1a98d12d-8716-4d0e-87ab-c7e9b4ab9527\" -%}\n{%- set orcidPath = \"63eecafc-fdda-47d3-92d2-d58fad54588d.c9cd6f2d-d16e-4ef6-831f-a20e33290b6f\" -%}\n"
        }, 
        {
            "uuid" : "8aaa1c33-9de4-476b-8dd2-3726d97d844d",
            "fileName" : "content/_triples.j2",
            "content" : "{%- import \"content/_definition.j2\" as def with context -%}\n{%- set km = ctx.knowledgeModel -%}\n{%- set replies = ctx.questionnaireReplies -%}\n\n{%- set triples = [] -%}\n\n{%- set communityReply = replies[def.communityPath].value -%}\n{%- set communityUri = [] -%}\n{%- set communityQuestion = km.entities.questions[def.communityUuid] -%}\n{%- if communityReply.type == \"PlainValue\" and communityReply.value -%}\n  {%- do communityUri.append(communityReply.value) -%}\n{%- elif communityReply.id -%}\n  {%- set integration = km.entities.integrations[communityQuestion.integrationUuid] -%}\n  {%- do communityUri.append(integration.itemUrl|replace(\"${id}\", communityReply.id)) -%}\n{%- endif -%}\n{%- set orcid = replies[def.orcidPath]|reply_str_value -%}\n\n{%- for q in def.questions -%}\n  {%- set dquestion = km.entities.questions[q[\"declaration\"]] -%}\n  {#- Comment with question text -#}\n  {%- do triples.append([dquestion.title]) -%}\n\n  {%- set declarationsPath = [q[\"chapter\"], q[\"declaration\"]]|reply_path -%}\n  {%- set declarations = replies[declarationsPath]|reply_items -%}\n  {%- for declarationUuid in declarations -%}\n    {%- set blanknode = \"_:\" ~ declarationUuid -%}\n    {%- set declarationPath = [declarationsPath, declarationUuid]|reply_path -%}\n    {#- It is a declaration -#}\n    {%- do triples.append([blanknode, \"a\", \"fip:FIP-Declaration\"]) -%}\n    {#- It related to FIP question -#}\n    {%- do triples.append([blanknode, \"fip:refers-to-question\", \"<\" ~ q[\"purl\"] ~ \">\"]) -%}\n    {#- Community making the declaration -#}\n    {%- if communityUri|length > 0 -%}\n      {%- do triples.append([blanknode, \"fip:declared-by\", \"<\" ~ communityUri[0] ~ \">\"]) -%}\n    {%- endif -%}\n    {#- Community making the declaration -#}\n    {%- set considerationsPath = [declarationPath, q[\"consideration\"]]|reply_path -%}\n    {%- set considerations = replies[considerationsPath]|reply_str_value -%}\n    {%- do triples.append([blanknode, \"fip:considerations\", considerations|tojson]) -%}\n    {#- Current: FAIRsharing -#}\n    {%- if q[\"type\"] == \"normal\" -%}\n      {%- set cfairsharingReply = replies[[declarationPath, q[\"c_fairsharing\"]]|reply_path] -%}\n      {%- if cfairsharingReply -%}\n        {%- set reply = cfairsharingReply.value -%}\n        {%- set question = km.entities.questions[q[\"c_fairsharing\"]] -%}\n        {%- if reply.type == \"PlainValue\" and reply.value -%}\n          {%- do triples.append([blanknode, \"fip:declares-current-use-of\", \"<\" ~ reply.value ~ \">\"]) -%}\n        {%- elif reply.id -%}\n          {%- set integration = km.entities.integrations[question.integrationUuid] -%}\n          {%- set url = integration.itemUrl|replace(\"${id}\", reply.id) -%}\n          {%- do triples.append([blanknode, \"fip:declares-current-use-of\", \"<\" ~ url ~ \">\"]) -%}\n        {%- endif -%}\n      {%- endif -%}\n    {%- endif -%}\n    {#- Current: Nanobench -#}\n    {%- if q[\"type\"] == \"normal\" or q[\"type\"] == \"only_nanobench\" -%}\n      {%- set cnanobenchReply = replies[[declarationPath, q[\"c_nanobench\"]]|reply_path]-%}\n      {%- if cnanobenchReply -%}\n        {%- set reply = cnanobenchReply.value -%}\n        {%- set question = km.entities.questions[q[\"c_nanobench\"]] -%}\n        {%- if reply.type == \"PlainValue\" and reply.value -%}\n          {%- do triples.append([blanknode, \"fip:declares-current-use-of\", \"<\" ~ reply.value ~ \">\"]) -%}\n        {%- elif reply.id -%}\n          {%- set integration = km.entities.integrations[question.integrationUuid] -%}\n          {%- set url = integration.itemUrl|replace(\"${id}\", reply.id) -%}\n          {%- do triples.append([blanknode, \"fip:declares-current-use-of\", \"<\" ~ url ~ \">\"]) -%}\n        {%- endif -%}\n      {%- endif -%}\n    {%- endif -%}\n    {#- Current: Options -#}\n    {%- if q[\"type\"] == \"options\" -%}\n      {%- set coptionsAnswerUuid = replies[[declarationPath, q[\"c_options\"]]|reply_path]|reply_str_value -%}\n      {%- if coptionsAnswerUuid -%}\n        {%- set answer = km.entities.answers[coptionsAnswerUuid] -%}\n        {%- set answerValue = answer.label -%}\n        {%- do triples.append([blanknode, \"fip:declares-current-use-of\", \"<\" ~ answerValue ~ \">\"]) -%}\n      {%- endif -%}\n    {%- endif -%}\n    {#- Planned (fip:declares-planned-use-of) -#}\n    {%- set plannedsPath = [declarationPath, q[\"planning\"]]|reply_path -%}\n    {%- set planneds = replies[plannedsPath]|reply_items -%}\n    {%- for plannedUuid in planneds -%}\n      {%- set plannedPath = [plannedsPath, plannedUuid]|reply_path -%}\n      {#- Planned: FAIRsharing -#}\n      {%- if q[\"type\"] == \"normal\" -%}\n        {%- set pfairsharingReply = replies[[plannedPath, q[\"p_fairsharing\"]]|reply_path] -%}\n        {%- if pfairsharingReply -%}\n          {%- set reply = pfairsharingReply.value -%}\n          {%- set question = km.entities.questions[q[\"p_fairsharing\"]] -%}\n          {%- if reply.type == \"PlainValue\" and reply.value -%}\n            {%- do triples.append([blanknode, \"fip:declares-planned-use-of\", \"<\" ~ reply.value ~ \">\"]) -%}\n          {%- elif reply.id -%}\n            {%- set integration = km.entities.integrations[question.integrationUuid] -%}\n            {%- set url = integration.itemUrl|replace(\"${id}\", reply.id) -%}\n            {%- do triples.append([blanknode, \"fip:declares-planned-use-of\", \"<\" ~ url ~ \">\"]) -%}\n          {%- endif -%}\n        {%- endif -%}\n      {%- endif -%}\n      {#- Planned: Nanobench -#}\n      {%- if q[\"type\"] == \"normal\" or q[\"type\"] == \"only_nanobench\" -%}\n        {%- set pnanobenchReply = replies[[plannedPath, q[\"p_nanobench\"]]|reply_path]-%}\n        {%- if pnanobenchReply -%}\n          {%- set reply = pnanobenchReply.value -%}\n          {%- set question = km.entities.questions[q[\"p_nanobench\"]] -%}\n          {%- if reply.type == \"PlainValue\" and reply.value -%}\n            {%- do triples.append([blanknode, \"fip:declares-planned-use-of\", \"<\" ~ reply.value ~ \">\"]) -%}\n          {%- elif reply.id -%}\n            {%- set integration = km.entities.integrations[question.integrationUuid] -%}\n            {%- set url = integration.itemUrl|replace(\"${id}\", reply.id) -%}\n            {%- do triples.append([blanknode, \"fip:declares-planned-use-of\", \"<\" ~ url ~ \">\"]) -%}\n          {%- endif -%}\n        {%- endif -%}\n      {%- endif -%}\n      {#- Planned: Options -#}\n      {%- if q[\"type\"] == \"options\" -%}\n        {%- set poptionsAnswerUuid = replies[[plannedPath, q[\"p_options\"]]|reply_path]|reply_str_value -%}\n        {%- if poptionsAnswerUuid -%}\n          {%- set answer = km.entities.answers[poptionsAnswerUuid] -%}\n          {%- set answerValue = answer.label -%}\n          {%- do triples.append([blanknode, \"fip:declares-planned-use-of\", \"<\" ~ answerValue ~ \">\"]) -%}\n        {%- endif -%}\n      {%- endif -%}\n    {%- endfor -%}\n  {%- endfor -%}\n  {%- do triples.append([\"=======================================================\"]) -%}\n{%- endfor -%}\n"
        }
    ],
    "assets" : [],
    "createdAt" : ISODate("2020-09-30T06:58:50.163Z")
})

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

db.getCollection('migrations').insertMany([
{
    "number" : 1,
    "name" : "Organizations Init",
    "description" : "",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.251935 UTC"
},
{
    "number" : 2,
    "name" : "Users Init",
    "description" : "",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.279602 UTC"
},
{
    "number" : 3,
    "name" : "Book References Init",
    "description" : "",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.298273 UTC"
},
{
    "number" : 4,
    "name" : "Metrics Init",
    "description" : "",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.355183 UTC"
},
{
    "number" : 5,
    "name" : "Levels Init",
    "description" : "",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.378879 UTC"
},
{
    "number" : 6,
    "name" : "Questionnaire Visibility",
    "description" : "Questionnaire now can be private and public",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.403023 UTC"
},
{
    "number" : 7,
    "name" : "User IsActive",
    "description" : "Rename 'isActive' field to 'active' in User Entity",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.407417 UTC"
},
{
    "number" : 8,
    "name" : "Public Questionnaire Visibility",
    "description" : "Add new fields to Public Questionnaire",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.411771 UTC"
},
{
    "number" : 9,
    "name" : "Book References Markdown",
    "description" : "",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.416212 UTC"
},
{
    "number" : 10,
    "name" : "Branch Owner and Timestamps",
    "description" : "Knowledge Model in Editor has its owner and timestamps",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.457972 UTC"
},
{
    "number" : 11,
    "name" : "Update DATASTEWARD Perms",
    "description" : "Add 'PM_WRITE_PERM' to DATASTEWARD permissions",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.463923 UTC"
},
{
    "number" : 12,
    "name" : "Erase questionnaire replies",
    "description" : "Due to change replies structure, it's necessary to erase all save replies",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.468887 UTC"
},
{
    "number" : 13,
    "name" : "Questionnaire SelectedTagUuids",
    "description" : "Questionnaire can now have tags",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.474455 UTC"
},
{
    "number" : 14,
    "name" : "Purge database",
    "description" : "Purge all packages, branches and questionnaires",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.479576 UTC"
},
{
    "number" : 15,
    "name" : "Remove cached Knowledge Model",
    "description" : "Remove cached knowledge model from branches, questionnaires and migrations; Remove public questionnaire due to new public package",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.487424 UTC"
},
{
    "number" : 16,
    "name" : "Metamodel Version",
    "description" : "Add metamodel version to branch and kmMigrations",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.499707 UTC"
},
{
    "number" : 17,
    "name" : "Questionnaire Accessibility",
    "description" : "Basic Questionnaire Visibility changed to more sophisticated Accessibility",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.506119 UTC"
},
{
    "number" : 18,
    "name" : "Package Readme and CreatedAt",
    "description" : "Add readme and createdAt field to Package entity",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.513278 UTC"
},
{
    "number" : 19,
    "name" : "BSON HashMap",
    "description" : "Change BSON mapping of HashMap",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.519471 UTC"
},
{
    "number" : 20,
    "name" : "Package License",
    "description" : "Add license field to packages",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.529805 UTC"
},
{
    "number" : 21,
    "name" : "Questionnaire Labels",
    "description" : "Add labels field to questionnaire",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.535092 UTC"
},
{
    "number" : 22,
    "name" : "ForkOfPackageId and MergeCheckpointPackageId",
    "description" : "Rename and move to package - ForkOfPackageId and MergeCheckpointPackageId",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.539354 UTC"
},
{
    "number" : 23,
    "name" : "Remove item title",
    "description" : "Rename itemName from questionnaire's replies",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.547491 UTC"
},
{
    "number" : 24,
    "name" : "User name and surname",
    "description" : "Rename name and surname to firstName and lastName",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.553483 UTC"
},
{
    "number" : 25,
    "name" : "Document Preview and FormatUuid",
    "description" : "Add new 'durability' and 'questionnaireRepliesHash' fields to Document; Convert 'format' to 'formatUuid'",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.558006 UTC"
},
{
    "number" : 26,
    "name" : "Add Application Configs",
    "description" : "Add config into DB and add CFG_PERM to admin users",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.573446 UTC"
},
{
    "number" : 27,
    "name" : "Submission",
    "description" : "Add config for submission into DB and add SUBM_PERM to all users",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.611144 UTC"
},
{
    "number" : 28,
    "name" : "Questionnaire Creator",
    "description" : "Add creator to questionnaire",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.618002 UTC"
},
{
    "number" : 29,
    "name" : "Add DB Indexes",
    "description" : "Add indexes for collection",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.622717 UTC"
},
{
    "number" : 30,
    "name" : "BSON Generic",
    "description" : "Make (de)serialization generic",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.81475 UTC"
},
{
    "number" : 31,
    "name" : "User ImageURL",
    "description" : "Add 'imageUrl' to User",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.821462 UTC"
},
{
    "number" : 32,
    "name" : "AppConfig Organization Description",
    "description" : "Add 'description' to AppConfig Organization",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.825686 UTC"
},
{
    "number" : 33,
    "name" : "Remove public questionnaire",
    "description" : "Remove publicPackages coll and publicQuestionnaire from AppConfig",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.830394 UTC"
},
{
    "number" : 34,
    "name" : "AppConfig Recommended TemplateUuid",
    "description" : "Add 'recommendedTemplateUuid' to AppConfig",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.836706 UTC"
},
{
    "number" : 35,
    "name" : "Questionnaire Visibility",
    "description" : "Rename questionnaire 'accesibility' to 'visibility'",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.841584 UTC"
},
{
    "number" : 36,
    "name" : "New Templates",
    "description" : "Enhance appConfigs and refactor templates",
    "state" : "Finished",
    "createdAt" : "2020-07-08 15:50:55.938041565 UTC"
},
{
    "number" : 37,
    "name" : "Questionnaire Sharing",
    "description" : "Add questionnaire 'sharing'",
    "state" : "Finished",
    "createdAt" : "2020-09-08 17:38:04.52298961 UTC"
},
{    "number" : 38,
    "name" : "Document Owner",
    "description" : "Rename 'ownerUuid' to 'creatorUuid'",
    "state" : "Finished",
    "createdAt" : "2020-09-22 12:18:34.626253778 UTC"
}
])
