
export type capitalConstructionType={
  "$id":string,
  "$type":string,
  "sysId":string,
  "code":string,
  "handle":string,
  "description":string,
  "assignable":boolean
}

export type projectType={
  "$id":string,
  "$type":string,
  "sysId":string,
  "code":string,
  "handle":string,
  "description":string,
  "assignable":boolean
}

export type generalDesigner={
  "$id":string,
  "$type":string,
  "sysId":string,
  "handle":string,
  "description":string,
}

export type createUser = {
  "$id":string,
  "$type":string,
  "sysId":string,
  "handle":string,
  "description":string,
}

export type modifyUser = {
  "$id":string,
  "$type":string,
  "sysId":string,
  "handle":string,
  "description":string,
}

export type status={
  "$id":string,	
  "$type":string,
}

export type gip={
  "$id":string,
  "$type":string,
  "sysId":string,
  "handle":string,
  "description":string,
}


export type project = {
  "$id":string,
  "$type":string,
  "title":string,
  "identifier":number,
  "capitalConstructionType": capitalConstructionType,
  "projectType":projectType,
  "generalDesigner":generalDesigner,
  "startDate":string,
  "finishDate":string,
  "projectsObject":string,
  "gip"?: gip,
  "code":string,
  "notation":string,
  "createUser":createUser
  "createTime": string,
  "modifyUser":modifyUser
  "modifyTime":string,
  "guid":string,
  "type":string,
  "hasWorkflow":boolean,
  "description":string,
  "status":status,	
  "handle":string,
  "sysId":string
}

export type Projects = project[];